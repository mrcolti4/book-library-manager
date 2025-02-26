<?php

namespace App\Http\Controllers;

use App\Models\FavoriteBook;
use App\Models\User;
use Illuminate\Http\Request;

class FavoriteBookController extends Controller
{
    public function store(Request $request, User $user)
    {
        $bookId = $request->get('book_id');
        $userId = $request->get('user_id');
        $bookInLibrary = FavoriteBook::where('book_id', $bookId)
            ->where('user_id', $userId)
            ->first();


        if(null !== $bookInLibrary) {
            //TODO: implement error
            return back()->with('error', 'You already have this book in your library');
        }

        FavoriteBook::create([
            'book_id' => $bookId,
            'user_id' => $userId,
        ]);

        return to_route('home')->with('success', 'You add book to your library!');
    }
}
