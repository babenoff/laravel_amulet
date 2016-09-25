<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class DebugMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($this->_isAdmin()){
            Config::set('app.debug', true);
        }
        return $next($request);
    }

    protected function _isAdmin(){
        if(!Auth::guest()){
            $role = (int)Auth::user()->role;
            $role = $role>>10;
            if($role>0)
                $cBits=log($role,2);
            else $cBits=0;
            $newFlag=$role|1;
            if($newFlag==$role){
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
}
