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

Route::get('/lobby', [
    'as' => 'lobby',
    'uses' => 'LobbyController@index'
]);


Route::get('/new-hero', [
    'as' => 'new-hero',
    'uses' => 'LobbyController@showNewHeroForm'
]);

Route::post('/new-hero', [
    'uses' => 'LobbyController@newHero',
    'as' => 'new-hero-process'
]);

Route::post('/remove-hero', [
    'as' => 'remove-hero',
    'uses' => 'LobbyController@remove'
])->where('heroId', '[0-9]+');

Route::group([
    'prefix' => 'game',
],
    function () {
        Route::post('/connect', ['as' => 'connect-game', 'uses' => 'LobbyController@connect']);
        Route::get('', ['as' => 'game-main', 'uses' => 'GameController@main']);
        Route::get('goto/{locId}', ['as' => 'go', 'uses' => 'GameController@move'])->where('locId', '^(?<continentId>.*)\.(?<territoryId>.*)\.(?<layerId>.*)\.(?<positionId>.*)$');
        Route::get('disconnect', ['as' => 'disconnect', 'uses' => 'GameController@disconnect']);
        Route::get('hero', ['uses' => 'GameController@hero', 'as' => 'hero']);
        Route::get('inventory', ['uses' => 'GameController@inventory', 'as' => 'inventory']);
        Route::get('settings', ['uses' => 'GameController@settings', 'as' => 'game-settings']);
        Route::get('skills', ['uses' => 'GameController@skills', 'as' => 'skills']);
    });
