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
            return $next($request);
        });

    }

    public function main()
    {
        $coordinates = collect(explode(".", $this->game->loc->hash));
        $coordinate = $coordinates->last();
        $doors = $this->game->loc->doors;
        return view('game.main', [
            'game' => $this->game,
            'coordinate' => explode("x", $coordinate),
            'doors' => $doors
        ]);
    }

    public function hero()
    {
        return view('game.hero', [
            'game' => $this->game,
        ]);
    }

    public function inventory(Request $request)
    {
        return view('game.inventory', [
            'game' => $this->game,
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
        $hero = $this->game->hero;
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
        $this->loadGame($request);
        return $this->main();
    }

    public function disconnect(Request $req)
    {
        $this->game->hero->toOffline();
        $req->session()->forget('heroId');
        return redirect()->route('lobby')->with('errors', ['Ваш герой покинет игру в течение нескольких минут']);
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
            return redirect()->route('lobby')->with('errors', ['Load hero error']);
        }
    }
}
