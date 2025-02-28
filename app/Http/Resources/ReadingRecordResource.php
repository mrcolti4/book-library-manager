<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReadingRecordResource extends JsonResource
{
    public static $wrap = null;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'favorite_book_id' => $this->resource->favorite_book_id,
            'user_id' => $this->resource->user_id,
            'start_time' => $this->resource->start_time,
            'end_time' => $this->resource->end_time,
            'page_start' => $this->resource->page_start,
            'page_stop' => $this->resource->page_stop,
            'created_at' => $this->resource->created_at,
        ];
    }
}
