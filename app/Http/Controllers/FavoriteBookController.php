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
        $bookInLibrary = FavoriteBook::find($bookId);

        if(null !== $bookInLibrary) {
            //TODO: implement error
            return;
        }

        FavoriteBook::create([
            'book_id' => $bookId,
            'user_id' => $userId,
        ]);

        return back()->with('success', true);
    }
}
