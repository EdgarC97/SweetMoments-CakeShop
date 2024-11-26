<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderDetailRequest;
use App\Models\OrderDetail;

class OrderDetailController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(OrderDetailRequest $request)
    {
        OrderDetail::create($request->validated());
        return redirect()->route('orders.show', $request->order_id)->with('success', 'Detalle del pedido agregado correctamente.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(OrderDetailRequest $request, OrderDetail $orderDetail)
    {
        $orderDetail->update($request->validated());
        return redirect()->route('orders.show', $orderDetail->order_id)->with('success', 'Detalle del pedido actualizado correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderDetail $orderDetail)
    {
        $orderDetail->delete();
        return redirect()->route('orders.show', $orderDetail->order_id)->with('success', 'Detalle del pedido eliminado correctamente.');
    }
}