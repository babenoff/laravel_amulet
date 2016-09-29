<?php

namespace App\Http\Controllers\Auth;

use App\Continent;
use App\Http\Controllers\Controller;
use App\Location;
use App\LocationLayer;
use App\Territory;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ViewErrorBag;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/lobby';

    public function showLoginForm(Request $request){
        $continentsCount = Continent::all()->count();
        $territoryCount = Territory::all()->count();
        $layersCount = LocationLayer::all()->count();
        $locationsCount = Location::all()->count();
        //$errors = Session::get('errors', new ViewErrorBag());
        return view('auth.login', [
            'continents' => $continentsCount,
            'territories' => $territoryCount,
            'layers' => $layersCount,
            'locations' => $locationsCount
        ]);
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }
}
