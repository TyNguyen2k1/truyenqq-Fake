<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreComicRequest extends FormRequest
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
            'name' => ['required', 'string', 'unique:comics,name', 'max:255'],
            'another_name' => ['max:255'],
            'description' => ['string'],
            'avatar' => ['required', 'image'],
            'author_id' => ['exists:authors,id'],
            'categories_id' => ['array', 'min:1'],
            'slider' => ['required', 'image'],
        ];
    }
    // public function messages()
    // {
    //     return ['name.required' => 'Trường name là bắt buộc'];
    // }
}