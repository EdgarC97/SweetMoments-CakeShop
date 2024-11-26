<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
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
            'client_id' => 'required|exists:clients,id',
            'order_date' => 'required|date|before_or_equal:today',
            'delivery_date' => 'required|date|after_or_equal:order_date',
            'status' => 'required|in:' . implode(',', [\App\Models\Order::STATUS_PENDING, \App\Models\Order::STATUS_IN_PROGRESS, \App\Models\Order::STATUS_READY, \App\Models\Order::STATUS_DELIVERED]),
            'notes' => 'nullable|string|max:500',
        ];
    }

    public function messages()
    {
        return [
            'client_id.required' => 'El cliente es obligatorio.',
            'client_id.exists' => 'El cliente seleccionado no existe.',
            'order_date.required' => 'La fecha del pedido es obligatoria.',
            'order_date.date' => 'La fecha del pedido debe ser una fecha válida.',
            'order_date.before_or_equal' => 'La fecha del pedido no puede ser posterior a la fecha actual.',
            'delivery_date.required' => 'La fecha de entrega es obligatoria.',
            'delivery_date.date' => 'La fecha de entrega debe ser una fecha válida.',
            'delivery_date.after_or_equal' => 'La fecha de entrega no puede ser anterior a la fecha del pedido.',
            'status.required' => 'El estado del pedido es obligatorio.',
            'status.in' => 'El estado seleccionado no es válido.',
            'notes.string' => 'Las notas deben ser un texto.',
            'notes.max' => 'Las notas no pueden exceder los 500 caracteres.',
        ];
    }
}
