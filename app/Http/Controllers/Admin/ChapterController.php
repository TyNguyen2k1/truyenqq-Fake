<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreChapterRequest;
use App\Models\Chapter;
use App\Models\Comic;
use Illuminate\Http\Request;

class ChapterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $comics = Comic::pluck('name', 'id');
        return view('admin.chapter.create', compact('comics'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreChapterRequest $request)
    {
        $chapter = Chapter::create($request->only('comic_id'));
        $comic = Comic::find($request->comic_id);

        // luu comic_id
        $comic->chapters()->save($chapter);

        // luu hinh anh
        // $chapter->addMultipleMediaFromRequest($request->chapter_images)
        //     ->each(function ($chapter) {
        //         $chapter->toMediaCollection();
        //     });
        foreach ($request->chapter_images as $image_item) {
            $chapter->addMedia($image_item)
                ->toMediaCollection('chapter');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function show(Chapter $chapter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function edit(Chapter $chapter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Chapter $chapter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Chapter  $chapter
     * @return \Illuminate\Http\Response
     */
    public function destroy(Chapter $chapter)
    {
        //
    }
}