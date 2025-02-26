<?php

namespace App\Http\Controllers;

use App\Models\FavoriteBook;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FavoriteBookController extends Controller
{
    public function index(Request $request) 
    {
        $filter = $request->get('filter', 'all_books');
        $query = FavoriteBook::where('user_id', Auth::id())->with('book');

        if ('all_books' !== $filter) {
            $query->where('status', $filter);
        }

        $library = $query->get();
        
        return Inertia::render('Library/Index', [
            'library' => $library
        ]);
    }

    public function show(Request $request, FavoriteBook $favoriteBook) 
    {
        return Inertia::render('Library/Show', [
            'book' => $favoriteBook->book,
            'favoriteBook' => $favoriteBook,
            'records' => $favoriteBook->records
        ]);
    }

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

    public function destroy(Request $request, FavoriteBook $book) 
    {
        $book->delete();

        return back()->with('success', 'You remove book from your library!');
    }

    public function filterBooks(Request $request)
    {
        $filter = $request->get('filter');
        $books = FavoriteBook::where('user_id', Auth::id())
            ->where('status', $filter)    
            ->with('book')
            ->get();

        return Inertia::render('Library/Index', [
           'library' => $books 
        ]);
    }
}
