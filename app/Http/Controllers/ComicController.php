<?php

namespace App\Http\Controllers;

use App\Models\Comic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class ComicController extends Controller
{
    public function comic_detail($slug)
    {
        $comic = Comic::where('slug', $slug)->firstOrFail();
        views($comic)->cooldown(10)->record();
        return view('front-end.truyen-tranh.comic', compact('comic'));
    }

    public function read_comic(Request $request, $slug, $chap)
    {
        // dd(json_decode($request->cookie('comics')));
        $comic = Comic::where('slug', $slug)->first();

        $array_comic = array();

        // kiem tra comics co ton tai khong
        /**
         * array_unshift: them phan thu vao cuoi array
         * array_unique: xoa pha ntu trung lap
         * array_values: reset lai index
         */
        if ($cookie_data = json_decode($request->cookie('comics'))) {
            $array_comic = $cookie_data;
            array_unshift($array_comic, $comic->id);
        } else {
            array_unshift($array_comic, $comic->id);
        }

        $array_comic = array_values(array_unique($array_comic));
        $comic_cookie = cookie('comics', json_encode($array_comic), 100);
        // $comic_cookie = Cookie::forget('comic');
        return response()
            ->view('front-end.truyen-tranh.read', compact('comic', 'chap'))
            ->withCookie($comic_cookie);
    }
}
