<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:255'],
            'author' => ['required', 'string', 'max:255'],
            'published_at' => ['required', 'date_format:Y'],
            'pages' => ['required', 'numeric', 'min:1'],
            'poster' => $this->getPosterValidationRule('poster'),
        ];
    }

    private function getPosterValidationRule(string $key): array
    {
        if ($this->hasFile($key)) {
            return ['image:jpeg,png,jpg,svg', 'max:2048'];
        }
        return ['url'];
    }
}
