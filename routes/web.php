<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

use Illuminate\Support\Facades\Auth;

Route::get('/', 'HomeController@index');

Auth::routes();


Route::get('/lobby', 'LobbyController@index');
Route::get('/new-hero', 'LobbyController@showNewHeroForm');
Route::post('/new-hero', 'LobbyController@newHero');
Route::get('/connect/{heroId}', [
    'as' => 'connect-game',
    'uses' => 'LobbyController@connect'
])->where('heroId', '[0-9]+');
Route::get('/remove-hero/{heroId}', [
    'as' => 'remove-hero',
    'uses' => 'LobbyController@remove'
])->where('heroId', '[0-9]+');

Route::group([
    'prefix' => 'game',
    'middleware' => 'in.game'
],
    function () {
        Route::get('/', [
           'as' => 'game-main',
            'uses' => 'GameController@main'
        ]);

        Route::get('/goto/{locId}', [
            'as' => 'go',
            'uses' => 'GameController@move'
        ])->where('locId', '^(?<continentId>.*)\.(?<territoryId>.*)\.(?<layerId>.*)\.(?<positionId>.*)$');
    });