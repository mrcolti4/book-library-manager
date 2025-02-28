<?php

namespace App\Http\Controllers;

use App\Enums\BookReadingStatus;
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
        
        $records = ReadingRecord::where('favorite_book_id', $data['favorite_book_id'])->get();
        if (count($records) === 0) {
            $favoriteBook = FavoriteBook::where('id', $data['favorite_book_id'])->first();
            $favoriteBook->update([
                'status' => BookReadingStatus::IN_PROGRESS->value
            ]);
        }

        ReadingRecord::create($data);

        return to_route('library.show', ['favoriteBook' => $data['favorite_book_id']])->with('success', 'You finished reading this book!');
    }

    public function destroy(ReadingRecord $record)
    {
        $record->delete();

        return back();
    }
}
