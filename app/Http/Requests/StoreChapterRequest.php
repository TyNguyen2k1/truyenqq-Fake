<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreChapterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "comic_id" => ['required', 'exists:comics,id'],
            "chapter_images" => ['required', 'array', 'min:1'],
            "chapter_images.*" => ['required', 'image'],
            'published_date' => ['date_format:ATOM']
        ];
    }
}