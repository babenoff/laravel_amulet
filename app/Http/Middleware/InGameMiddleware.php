<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Session;

class InGameMiddleware
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
        if(false === Session::get('heroId', false)){
            return redirect('/lobby');
        }
        return $next($request);
    }
}
