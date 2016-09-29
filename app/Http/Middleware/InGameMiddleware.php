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
        $session = $request->session();
        if(false === $session->get('heroId', false)){
            return redirect()->route('lobby');
        }
        return $next($request);
    }
}
