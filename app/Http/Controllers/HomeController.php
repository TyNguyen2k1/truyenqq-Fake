<?php

namespace App\Http\Controllers;

use App\Models\Comic;
use App\Models\Author;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Statistical;
use Illuminate\Http\Request;
use CyrildeWit\EloquentViewable\Support\Period;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class HomeController extends Controller
{
    protected $paginate = 42;
    protected $comics_female;
    protected $comics_male;

    public function __construct()
    {
        $this->comics_female = Comic::whereHas('categories', function ($query) {
            $query->whereIn('name', [
                'Romance',
                'Ngôn Tình',
                'Yaoi',
                'Manhua',
                'Đam Mỹ',
                'Yuri',
                'School Life'
            ]);
        });

        $this->comics_male = Comic::whereHas('categories', function ($query) {
            $query->whereIn('name', [
                'Action',
                'Chuyển Sinh',
                'Ecchi',
                'Isekai',
                'Magic',
                'Yuri',
                'Trọng sinh',
                'School Life'
            ]);
        });
    }

    // danh sach truyen
    public function index()
    {
        $comics = Comic::latest()->paginate($this->paginate);
        $comics_female = $this->comics_female->take(12)->get();
        $comics_male = $this->comics_male->take(12)->get();
        $popular_comics = Comic::orderByViews('desc', Period::pastDays(1))->take(5)->get();
        return view('front-end.index', compact('comics', 'comics_male', 'comics_female', 'popular_comics'));
    }

    // hien thi truyen theo the loai
    public function category_show($slug)
    {
        $category = Category::where('slug', $slug)->first();
        $items = $category->comics()->paginate($this->paginate);
        $properties = array(
            'properties' => 'Truyện',
            'name' => $category->name,
            'description' => $category->description
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }

    // hien thi truyen theo tac gia
    public function author_show($slug)
    {
        $author = Author::where('slug', $slug)->first();
        $items = $author->comics()->paginate($this->paginate);
        $properties = array(
            'properties' => 'Tác giả',
            'name' => $author->name,
            'description' => ''
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }

    //top ngay
    public function top_day()
    {
        // lay danh sach truyen trong ngay theo view
        $items = Comic::orderByViews('desc', Period::pastDays(1))->paginate($this->paginate);

        $properties = array(
            'properties' => '',
            'name' => 'Top ngày',
            'description' => ''
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }

    //top tuan
    public function top_weeks()
    {
        // lay danh sach truyen theo view
        $items = Comic::orderByViews('desc', Period::pastWeeks(1))->paginate($this->paginate);

        $properties = array(
            'properties' => '',
            'name' => 'Top tuần',
            'description' => ''
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }

    //top thang
    public function top_months()
    {
        // lay danh sach truyen trong ngay theo view
        $items = Comic::orderByViews('desc', Period::pastMonths(1))->paginate($this->paginate);

        $properties = array(
            'properties' => '',
            'name' => 'Top tháng',
            'description' => ''
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }

    //top yeu thich
    public function top_loves()
    {

        // $items = Statistical::whereHas('comic')->orderByDesc('number_of_likes')->paginate($this->paginate);
        $items = Comic::join("statisticals", "statisticals.comic_id", "=", "comics.id")
            ->orderBy('number_of_likes', 'desc')
            ->orderBy('number_of_followers', 'desc')
            ->paginate($this->paginate);

        // $items = Comic::whereHas('statistical',function (\Illuminate\Database\Eloquent\Builder $query){
        //     $query->orderBy('number_of_likes', 'desc');
        // })->paginate($this->paginate);


        $properties = array(
            'properties' => '',
            'name' => 'Top yêu thích',
            'description' => ''
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }

    // truyen moi cap nhat
    public function top_new_update()
    {
        $items = Comic::orderBy('updated_at')->paginate($this->paginate);
        $properties = array(
            'properties' => '',
            'name' => 'Truyện Mới Cập Nhật',
            'description' => ''
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }

    // truyen moi
    public function new_comics()
    {
        $items = Comic::orderBy('created_at')->paginate($this->paginate);
        $properties = array(
            'properties' => '',
            'name' => 'Truyện Mới',
            'description' => ''
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }

    // truyen full
    public function comics_full()
    {
        $items = Comic::where('status', 1)->paginate($this->paginate);
        $properties = array(
            'properties' => '',
            'name' => 'Truyện Hoàn Thành',
            'description' => ''
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }

    // tim kiem truyen nang cao
    public function search()
    {
        return view('front-end.search_by.search-advanced');
    }

    // truyen con gai
    public function comics_female()
    {
        $items = $this->comics_female->paginate($this->paginate);
        $properties = array(
            'properties' => '',
            'name' => 'Truyện Con Gái',
            'description' => ''
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }

    // truyen con trai
    public function comics_male()
    {
        $items = $this->comics_male->paginate($this->paginate);
        $properties = array(
            'properties' => '',
            'name' => 'Truyện Con Trai',
            'description' => ''
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }

    // lich su doc truyen
    public function historyReadComic(Request $request)
    {
        $list_comic = json_decode($request->cookie('comics'));

        $items = $list_comic ? Comic::whereIn('id', $list_comic)->orderByRaw('FIELD(id, '. implode(", " , $list_comic).')')->paginate($this->paginate) : null;
        $properties = array(
            'properties' => '',
            'name' => 'Lịch Sử Đọc Truyện',
            'description' => ''
        );
        return view('front-end.search_by.search', compact('properties', 'items'));
    }
}
