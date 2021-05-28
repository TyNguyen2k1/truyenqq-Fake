<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Author;
use App\Models\Category;
use App\Models\Comic;
use App\Models\ComicCategories;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Requests\StoreComicRequest;

class ComicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return view('f-end.index', compact('comics'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::pluck('name', 'id');
        $authors = Author::pluck('name', 'id');
        return view('admin.comic.create', compact('categories', 'authors'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreComicRequest $request)
    {
        $comic = Comic::create([
            'name' => $request->name,
            'another_name' => $request->another_name,
            'slug' => Str::slug($request->name),
            'description' => $request->description,
            'author_id' => $request->author_id
        ]);
        // them danh sach the loai cho truyen
        $comic->categories()->attach($request->categories_id);
        // khoi tao bang thong ke
        $comic->statistical()->create();
        //tao anh slider
        $comic->slider()->create()
            ->addMedia($request->file('slider'))
            ->toMediaCollection('slider');

        $file = $request->avatar;
        $fileName = Str::slug($request->name) . '_' . random_int(10 ** 9, 9999999999) . '.' . $file->getClientOriginalExtension();
        $comic->addMedia($request->file('avatar'))
            ->usingFileName($fileName)
            ->toMediaCollection('comic');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comic  $comic
     * @return \Illuminate\Http\Response
     */
    public function show(Comic $comic)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Comic  $comic
     * @return \Illuminate\Http\Response
     */
    public function edit(Comic $comic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Comic  $comic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comic $comic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comic  $comic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comic $comic)
    {
        //
    }
}
