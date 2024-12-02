<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with('client')->get();
        return Inertia::render('Orders/Index', [
            'orders' => $orders
        ]);
    }

    public function create()
    {
        return Inertia::render('OrderCreate');
    }

    public function store(OrderRequest $request)
    {
        Order::create($request->validated());
        return redirect()->route('orders.index')->with('success', 'Pedido creado correctamente.');
    }

    public function show(Order $order)
    {
        $order->load('client');
        return Inertia::render('OrderShow', [
            'order' => $order
        ]);
    }

    public function edit(Order $order)
    {
        $order->load('client');
        return Inertia::render('OrderEdit', [
            'order' => $order
        ]);
    }

    public function update(OrderRequest $request, Order $order)
    {
        $order->update($request->validated());
        return redirect()->route('orders.index')->with('success', 'Pedido actualizado correctamente.');
    }

    public function destroy(Order $order)
    {
        $order->delete();
        return redirect()->route('orders.index')->with('success', 'Pedido eliminado correctamente.');
    }
}

