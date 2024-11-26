<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
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
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:clients,email,' . $this->client?->id,
            'phone' => 'required|string|max:20',
            'address' => 'required|string|max:500',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El nombre del cliente es obligatorio.',
            'name.string' => 'El nombre del cliente debe ser un texto.',
            'name.max' => 'El nombre del cliente no puede exceder los 255 caracteres.',
            'last_name.required' => 'El apellido del cliente es obligatorio.',
            'last_name.string' => 'El apellido del cliente debe ser un texto.',
            'last_name.max' => 'El apellido del cliente no puede exceder los 255 caracteres.',
            'email.required' => 'El correo electrónico del cliente es obligatorio.',
            'email.email' => 'Debe ingresar un correo electrónico válido.',
            'email.max' => 'El correo electrónico del cliente no puede exceder los 255 caracteres.',
            'email.unique' => 'Este correo electrónico ya está registrado para un cliente.',
            'phone.required' => 'El teléfono del cliente es obligatorio.',
            'phone.max' => 'El teléfono del cliente no puede exceder los 20 caracteres.',
            'address.required' => 'La dirección del cliente es obligatoria.',
            'address.string' => 'La dirección del cliente debe ser un texto.',
            'address.max' => 'La dirección del cliente no puede exceder los 500 caracteres.',
        ];
    }
}
