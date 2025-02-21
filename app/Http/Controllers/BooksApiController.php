<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Pagination\Cursor;
use Illuminate\Support\Facades\Log;

class BooksApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $cursor = $request->get('cursor');
        $perPage = $request->get('perPage');
        $books = Book::cursorPaginate(perPage: $perPage, cursor: $cursor);

        return response()->json([
            'books' => $books->items(),
            'nextCursor' => $books->hasMorePages() ? $books->nextCursor()->encode(): null,
            'prevCursor' => $books->previousCursor() ? $books->previousCursor()->encode(): null,
            'hasMore' => $books->hasMorePages()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}
