<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Models\FavoriteBook;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $sort = $request->query('sort', 'oldest');
        $column = $request->query('column', 'created_at');

        $direction = $sort === 'oldest' ? 'asc' : 'desc';
        $books = Book::orderBy($column, $direction)->paginate(10)->withQueryString();

        return Inertia::render('Admin/Books/Index', [
            'data' => BookResource::collection($books),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Books/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        $data = $request->validated();

        $uploadPath = Storage::disk('s3')->putFile('books', $data['poster']);
        $data['poster_short_url'] = $uploadPath;
        $data['poster'] = Storage::disk('s3')->url($uploadPath);

        $book = Book::create($data);

        return to_route('admin.books.edit', ['book' => $book->id])->with('success', 'You add book to your library!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        return Inertia::render('Admin/Books/Edit', [
            'book' => $book,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        $data = $request->validated();
        
        if($data['poster'] !== $book->poster && null !== $book->poster_short_url) {
            Storage::disk('s3')->delete($book->poster_short_url);
        }
        if($request->file('poster')) {
            $uploadPath = Storage::disk('s3')->putFile('books', $data['poster']);
            $data['poster_short_url'] = $uploadPath;
            $data['poster'] = Storage::disk('s3')->url($uploadPath);
        }

        $book->update($data);
        $book->refresh();
        
        return redirect()
            ->route('admin.books.edit', ['book' => $book])
            ->with('success', 'You update book successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        Storage::disk('s3')->delete($book->poster_short_url);
        $book->delete();

        return back()->with('success', 'You remove book from your library!');
    }
}
