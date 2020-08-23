<?php

namespace App\Http\Middleware;

use Closure;

class CORS
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
        header('Access-Control-Allow-Headers: Content-type, X-Auth-Token, Authorization');
        header('Access-Control-Allow-Methods: GET, POST');
        header('Access-Control-Allow-Origin', '*');
        return $next($request);
    }
}
