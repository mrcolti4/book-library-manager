<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReadingRecordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'start_time' => ['required', 'date_format:Y-m-d\TH:i:s\Z'],
            'end_time' => ['required', 'date_format:Y-m-d\TH:i:s\Z'],
            'page_count' => ['required', 'numeric', 'min:1'],
            'favorite_book_id' => ['required', 'exists:favorite_books,id'],
        ];
    }
}
