<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReadingRecordRequest;
use App\Models\FavoriteBook;
use App\Models\ReadingRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReadingRecordController extends Controller
{
    public function store(ReadingRecordRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = Auth::id();

        ReadingRecord::create($data);

        return to_route('library.show', ['favoriteBook' => $data['favorite_book_id']])->with('success', 'You finished reading this book!');
    }
}
