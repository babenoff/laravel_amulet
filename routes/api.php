<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/heroes/{locId}', function ($locId, Request $request) {
    $heroes = collect([]);
    /** @var \Illuminate\Database\Eloquent\Collection $onlineHeroes */
    $onlineHeroes = \App\OnlineHeroes::where('loc_id', $locId);
    $onlineHeroes->each(function ($online) use ($heroes, $request) {
        $session = $request->user();
        $heroes->push($online->hero);
    });
    return $heroes->toJson();
})->middleware('auth:api');
