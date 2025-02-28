<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ReadingRecord extends Model
{
    protected $fillable = [
        'start_time',
        'end_time',
        'page_start',
        'page_stop',
        'favorite_book_id',
        'user_id',
    ];
    public function book(): BelongsTo
    {
        return $this->belongsTo(FavoriteBook::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
