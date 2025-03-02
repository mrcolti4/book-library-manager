<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckIsUserBlocked
{
    protected $routeMiddleware = ['blocked'];
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(null !== $request->user()->blocked_at) {
            abort(403, 'Your account has been blocked.');
        }
        return $next($request);
    }
}
