<?php

namespace App\Http\Controllers;

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

    public function __construct(Request $request)
    {
        $this->middleware('in.game');
        $heroId = $request->session()->get('heroId');
        $onlineHero = OnlineHeroes::where(
            'hero_id', $heroId
        )->first();
        $this->game = $onlineHero;
    }

    public function main(){

        return view('game.main', [
            'game' => $this->game
        ]);
    }

    public function hero(){
        return view('game.hero', [
            'game' => $this->game,
        ]);
    }

    public function disconnect(Request $req){
        $this->game->hero->toOffline();
        $req->session()->forget('heroId');
        return redirect()->route('lobby')->with('errors', 'Ваш герой покинет игру в течение нескольких минут');
    }
}
