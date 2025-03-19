<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;

class Book extends Model
{
    /** @use HasFactory<\Database\Factories\BookFactory> */
    use HasFactory, Searchable;
    protected $fillable = [
        'title',
        'author',
        'published_at',
        'pages',
        'poster',
        'poster_short_url',  
    ];

    public function library(): HasMany
    {
        return $this->hasMany(Book::class);
    }

    public function toSearchableArray(): array
    {
        return [
            'id' => $this->getKey(),
            'title' => $this->title, 
            'author' => $this->author,
        ];
    }
}
