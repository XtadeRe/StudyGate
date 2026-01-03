<?php
// app/Http/Middleware/AddLayoutToResponse.php

namespace App\Http\Middleware;

use Closure;
use Inertia\Inertia;

class AddLayoutToResponse
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if ($response instanceof \Illuminate\Http\Response &&
            isset($response->original['component']) &&
            !isset($response->original['layout'])
        ) {
            $response->original['layout'] = 'DefaultLayout'; // Имя нашего лейаута
        }

        return $response;
    }
}
