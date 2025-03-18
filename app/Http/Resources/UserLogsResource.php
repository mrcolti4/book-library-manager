<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserLogsResource extends JsonResource
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
            'ip_address' => $this->resource->ip_address,
            'logout_at' => $this->resource->logout_at,
            'login_at' => $this->resource->login_at,
            'login_successful' => $this->resource->login_successful,
            'user_agent' => $this->resource->user_agent,
        ];
    }
}
