<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:500',
            'price' => 'required|numeric|min:0.01',
            'size' => 'nullable|string|max:50',
            'ingredients' => 'nullable|string|max:500',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El nombre del producto es obligatorio.',
            'name.string' => 'El nombre del producto debe ser un texto.',
            'name.max' => 'El nombre del producto no puede exceder los 255 caracteres.',
            'description.string' => 'La descripción debe ser un texto.',
            'description.max' => 'La descripción no puede exceder los 500 caracteres.',
            'price.required' => 'El precio del producto es obligatorio.',
            'price.numeric' => 'El precio debe ser un número válido.',
            'price.min' => 'El precio debe ser al menos 0.01.',
            'size.string' => 'El tamaño debe ser un texto.',
            'size.max' => 'El tamaño no puede exceder los 50 caracteres.',
            'ingredients.string' => 'Los ingredientes deben ser un texto.',
            'ingredients.max' => 'Los ingredientes no pueden exceder los 500 caracteres.',
        ];
    }
}