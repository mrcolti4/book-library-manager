<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    protected $fillable = [
        'title',
        'author',
        'published_at',
        'pages',
        'poster',
        'poster_short_url',  
    ];
    /** @use HasFactory<\Database\Factories\BookFactory> */
    use HasFactory;

    public function library(): HasMany
    {
        return $this->hasMany(Book::class);
    }
}
