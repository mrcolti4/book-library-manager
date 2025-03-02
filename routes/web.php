<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\BookHomeController;
use App\Http\Controllers\FavoriteBookController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReadingRecordController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', BookHomeController::class)->middleware(['auth', 'verified'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->name('library.')->prefix('library')->group(function () {
    Route::get('/', [FavoriteBookController::class, 'index'])->name('index');
    Route::post('/add', [FavoriteBookController::class, 'store'])->name('store');
    Route::delete('/{book}/destroy', [FavoriteBookController::class, 'destroy'])->name('destroy');
    Route::get('/{favoriteBook}', [FavoriteBookController::class, 'show'])->name('show');
});

Route::middleware('auth')->name('record.')->prefix('record')->group(function () {
    Route::post('/store', [ReadingRecordController::class, 'store'])->name('store');
    Route::delete('/{record}/destroy', [ReadingRecordController::class, 'destroy'])->name('destroy');
});

Route::group([
    'prefix' => 'admin',
    'as' => 'admin.',
    'middleware' => ['auth', 'admin'],
], function () {
    Route::delete('/books/{book}/destroy', [BookController::class, 'destroy'])->name('books.destroy');
});


require __DIR__.'/auth.php';