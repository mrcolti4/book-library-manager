<?php

use App\Http\Controllers\BookHomeController;
use App\Http\Controllers\FavoriteBookController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReadingRecordController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'blocked'])->group(function () {
    Route::get('/', function () {
        return redirect()->route('home');
    });
    Route::get('/home', BookHomeController::class)->name('home');
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::name('library.')->prefix('library')->group(function () {
        Route::get('/', [FavoriteBookController::class, 'index'])->name('index');
        Route::post('/add', [FavoriteBookController::class, 'store'])->name('store');
        Route::delete('/{book}/destroy', [FavoriteBookController::class, 'destroy'])->name('destroy');
        Route::get('/{favoriteBook}', [FavoriteBookController::class, 'show'])->name('show');
    });
    
    Route::name('record.')->prefix('record')->group(function () {
        Route::post('/store', [ReadingRecordController::class, 'store'])->name('store');
        Route::delete('/{record}/destroy', [ReadingRecordController::class, 'destroy'])->name('destroy');
    });
});
