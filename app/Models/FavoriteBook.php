<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FavoriteBook extends Model
{
    protected $fillable = [
        'book_id',
        'user_id'
    ];
    public function user(): BelongsTo
    {
        $this->belongsTo(User::class);
    }
}
