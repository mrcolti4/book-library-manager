<?php

use App\Http\Controllers\BooksApiController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'api',
    'as' => 'api.'
], function () {
    Route::group([
        'prefix' => 'books',
        'as' => 'books.'
    ], function () {
        Route::get('/all', [BooksApiController::class, 'index'])->name('index');
    });
});
