<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FavoriteBook extends Model
{
    protected $fillable = [
        'book_id',
        'user_id',
        'status'
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function book(): BelongsTo
    {
        return $this->belongsTo(Book::class);
    }

    public function records(): HasMany
    {
        return $this->hasMany(ReadingRecord::class);
    }
}
