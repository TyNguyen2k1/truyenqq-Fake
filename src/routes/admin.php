<?php

use App\Http\Controllers\Admin\AuthorController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ChapterController;
use App\Http\Controllers\Admin\ComicController;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::match(['get', 'post'], '/login', [LoginController::class, 'login'])->name('admin.login');
Route::match(['get', 'post'], '/logout', [LoginController::class, 'logout'])->name('admin.logout');
Route::middleware('auth:admin')->name('admin.')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('dashboard');

    // the loai
    Route::get('the-loai/index', [CategoryController::class, 'index'])->name('category.index');
    //end

    //tac gia
    Route::get('tac-gia/index', [AuthorController::class, 'index'])->name('author.index');
    //end

    //truyen
    Route::prefix('truyen')->group(function () {
        Route::get('index', [ComicController::class, 'index'])->name('comic.index');
        Route::get('create', [ComicController::class, 'create'])->name('comic.create');
        Route::post('store', [ComicController::class, 'store'])->name('comic.store');
    });
    //end

    //chuong
    Route::prefix('chuong')->group(function () {
        // Route::get('index', [ComicController::class, 'index'])->name('comic.index');
        Route::get('create', [ChapterController::class, 'create'])->name('chapter.create');
        Route::post('store', [ChapterController::class, 'store'])->name('chapter.store');
    });
    //end
});
