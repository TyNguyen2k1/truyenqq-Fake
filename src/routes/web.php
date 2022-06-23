<?php

use Illuminate\Support\Facades\Route;
use App\Models\Category;
use App\Models\Comic;
use App\Models\Slider;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ComicController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\LockedChapter;
use Illuminate\Database\Eloquent\Collection;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return back();
})->name('dashboard');

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::name('front-end.')->group(function () {

    Route::get('the-loai/{slug}', [HomeController::class, 'category_show'])->name('category');
    Route::get('tac-gia/{slug}', [HomeController::class, 'author_show'])->name('author');
    Route::get('lich-su', [HomeController::class, 'historyReadComic'])->name('history');


    Route::get('top-ngay', [HomeController::class, 'top_day'])->name('top_day');
    Route::get('top-tuan', [HomeController::class, 'top_weeks'])->name('top_tuan');
    Route::get('top-thang', [HomeController::class, 'top_months'])->name('top_thang');
    Route::get('yeu-thich', [HomeController::class, 'top_loves'])->name('top_loves');
    Route::get('moi-cap-nhat', [HomeController::class, 'top_new_update'])->name('top_new_update');
    Route::get('truyen-tranh-moi', [HomeController::class, 'new_comics'])->name('new_comics');
    Route::get('truyen-con-gai', [HomeController::class, 'comics_female'])->name('comics_female');
    Route::get('truyen-con-trai', [HomeController::class, 'comics_male'])->name('comics_male');
    Route::get('truyen-hoan-thanh', [HomeController::class, 'comics_full'])->name('comics_full');
});



// truyen tranh
Route::prefix('truyen-tranh')->name('comic.')->group(function () {
    Route::get('{slug}', [ComicController::class, 'comic_detail'])->name('detail');

    Route::get('{slug}/chap-{chap}', [ComicController::class, 'read_comic'])->name('read')->middleware(LockedChapter::class);
});

//user
Route::prefix('user')->name('user.')->middleware(['auth:sanctum', 'verified'])->group(function () {

    Route::get('quan-ly-tai-khoan', function () {
        return view('front-end.user.profile');
    })->name('profile');

    Route::get('tin-nhan', function () {
        return view('front-end.user.user_messenger');
    })->name('messenger');

    Route::get('truyen-dang-theo-doi', function () {
        return view('front-end.user.follow_list');
    })->name('follow_list');

    Route::get('buy-credits', function () {
        return view('front-end.user.user_buy_credits');
    })->name('by-credits');

    Route::post('buy-credits-submit', [UserController::class, 'buy_credits'])->name('buy-credits-submit');
    Route::post('buy', [UserController::class, 'buy'])->name('buy');

    Route::get('doi-mat-khau', function (){
        return view('front-end.user.user_update_password');
    })->name('update_password');

});
