<?php

namespace App\Http\Controllers;

use App\Hero;
use App\Location;
use App\OnlineHeroes;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Session;

class GameController extends Controller
{
    //
    /**
     * @var OnlineHeroes
     */
    protected $game;
    /**
     * @var array
     */
    protected $loadedLoc = [];

    public function __construct()
    {
        $this->middleware('in.game');
        $this->middleware(function (Request $request, \Closure $next) {
            $this->loadGame($request);
            if(!is_null($this->game)) {
                $this->game->hero->calculate();
                $this->game->updated_at = new \DateTime();
                $this->game->save();
                collect($this->loadedLoc)->each(function ($location) {
                    //в оффлайн кого давно не было
                    $location->heroes->each(function ($onlineHero) {
                        /** @var OnlineHeroes $onlineHero */
                        if ($onlineHero->updated_at->getTimestamp() + config("game.time_offline") < time()) {
                            $onlineHero->hero->toOffline();
                            $offlineMessgage = trans("game.move.disconnect:" . $onlineHero->hero->hero_sex, ["name" => $onlineHero->hero->name]);
                            $onlineHero->loc->addToJournalAll($offlineMessgage, [$onlineHero->hero->id]);
                            $onlineHero->delete();
                        }
                    });
                });
            }
            return $next($request);
        });

    }

    public function main(Request $request)
    {
        if(!is_null($this->game)) {
            $coordinates = collect(explode(".", $this->game->loc->hash));
            $coordinate = $coordinates->last();
            $doors = $this->game->loc->doors;
            $nbDrs = $this->game->loc->getNeighborsIds();
            $badDoors = [];
            for ($i = 0; $i < count($nbDrs); $i++) {
                $nbDoors = $this->loadedLoc[$nbDrs[$i]]->getNeighborsIds();
                if (!in_array($this->game->loc->hash, $nbDoors)) {
                    array_push($badDoors, $nbDrs[$i]);
                }
            }
            return view('game.main', [
                'game' => $this->game,
                'coordinate' => explode("x", $coordinate),
                'doors' => $doors,
                'bad_doors' => $badDoors,
                'journal' => $this->game->hero->journal->all()
            ]);
        } else {
            $request->session()->forget('heroId');
            return redirect()->route('lobby');
        }
    }

    public function hero()
    {
        return view('game.hero', [
            'game' => $this->game,
            'hero' => $this->game->hero
        ]);
    }

    public function inventory(Request $request)
    {
        $this->game->hero->addMoney(1222);
        return view('game.inventory', [
            'game' => $this->game,
            'hero' => $this->game->hero
        ]);
    }

    public function skills(Request $request)
    {
        return view('game.skills', [
            'game' => $this->game,
        ]);
    }

    public function move($locId, Request $request)
    {
        try {
            if($locId != $this->game->loc->hash) {
                /** @var Hero $hero */
                $hero = $this->game->hero;
                /** @var Location $oldLoc */
                $oldLoc = $this->game->loc;
                $oldLocDoors = $oldLoc->doors;
                $newLoc = Location::where('hash', $locId)->first();
                if (!is_null($newLoc) and in_array($locId, $oldLocDoors) and in_array($oldLoc->hash, $newLoc->doors)) {
                    OnlineHeroes::destroy($this->game->id);
                    OnlineHeroes::create([
                        'hero_id' => $hero,
                        'loc_id' => $newLoc
                    ]);
                }
                $oldDoorI = array_search($locId, $oldLocDoors);
                $oldLocDoorName = $oldLocDoors[$oldDoorI - 1];
                $outMsg = trans("game.move.out:" . $hero->hero_sex, ["name" => $hero->name, "to" => $oldLocDoorName]);
                $this->game->loc->addToJournalAll($outMsg, [$hero->id]);
                $this->loadGame($request);
                $comeMsg = trans("game.move.come:" . $hero->hero_sex, ["name" => $hero->name]);
                $this->game->loc->addToJournalAll($comeMsg, [$hero->id]);
            }
            return $this->main($request);
        } catch (\ErrorException $e){
            $request->session()->forget('heroId');
            return redirect()->route('lobby')->with('errors', ["Err: ".$e->getMessage()]);
        }
    }

    public function disconnect(Request $req)
    {
        $this->game->hero->toOffline();
        $req->session()->forget('heroId');
        return redirect()->route('lobby');
    }

    private function loadGame(Request $request)
    {
        $session = $request->session();
        $heroId = $session->get('heroId');
        // $heroId = $request->session()->get('heroId');
        //$heroId = $request->session()->get('heroId');
        $onlineHero = OnlineHeroes::where(
            'hero_id', $heroId
        )->first();
        if (!is_null($onlineHero)) {
            $this->game = $onlineHero;
            $loc = $onlineHero->loc;
            $this->loadedLoc[$loc->hash] = $onlineHero->loc;
            for ($i = 1; $i < count($loc->doors); $i++){
                $locI = Location::where('hash', $loc->doors[$i])->first();
                if(!is_null($locI)) {
                    $this->loadedLoc[$loc->doors[$i]] = $locI;
                }
            }
        } else {
            $session->forget('heroId');
            return redirect()->route('lobby')->with('errors', ['Вы слишком долго отсутствовали и ваш персонаж за это время покинул игру']);
        }
    }

    public function __destruct()
    {
        $this->game->hero->clearJournal();
        $this->game->hero->save();
    }
}
