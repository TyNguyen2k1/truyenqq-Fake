<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class LockedChapter
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $comic = \App\Models\Comic::where('slug', $request->slug)->first();
        $comicChapterList = $comic->chapters[$request->chap];
        if ($comicChapterList->isLock && !(auth()->check() && auth()->user()->chapters()->find($comicChapterList->id))) {
            return abort(403);
        }
        return $next($request);
    }
}
