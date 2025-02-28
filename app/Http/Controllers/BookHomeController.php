<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Models\FavoriteBook;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookHomeController extends Controller
{
    public function __invoke(Request $request)
    {
        $books = Book::cursorPaginate(10);

        return Inertia::render('Home', [
            'books' => BookResource::collection($books),
            'library' => FavoriteBook::where('user_id', Auth::id())->get(),
        ]);
    }
}
