<?php 

declare(strict_types=1);

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class UploadImageService
{
    public function uploadImage(UploadedFile $image, string $path): array
    {
        $uploadPath = Storage::disk('s3')->putFile($path, $image);
        
        return [
            'poster_short_url' => $uploadPath,
            'poster' => Storage::disk('s3')->url($uploadPath),
        ];
    }
    public function deleteImage(string $path): bool
    {
        return Storage::disk('s3')->delete($path);
    }
}