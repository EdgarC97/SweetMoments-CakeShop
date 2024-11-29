<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return Inertia::render('products/index', ['products' => $products]);
    }

    public function create()
    {
        return Inertia::render('Products/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'size' => 'nullable|string|max:255',
            'ingredients' => 'nullable|string',
            'category' => 'nullable|string|max:255',
            'stock' => 'required|integer|min:0',
        ]);

        Product::create($validated);

        return redirect()->route('products.index')->with('success', 'Producto creado exitosamente.');
    }

    public function show(Product $product)
    {
        return Inertia::render('Products/Show', ['product' => $product]);
    }

    public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', ['product' => $product]);
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'size' => 'nullable|string|max:255',
            'ingredients' => 'nullable|string',
            'category' => 'nullable|string|max:255',
            'stock' => 'required|integer|min:0',
        ]);

        $product->update($validated);

        return redirect()->route('products.index')->with('success', 'Producto actualizado exitosamente.');
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index')->with('success', 'Producto eliminado exitosamente.');
    }
}

