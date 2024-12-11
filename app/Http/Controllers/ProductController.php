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
        return Inertia::render('Products/ProductsIndex', ['products' => $products]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'size' => 'nullable|string|max:255',
            'ingredients' => 'nullable|string',
            'category' => 'required|string|max:255',
            'stock' => 'required|integer|min:0',
        ]);

        $product = Product::create($validatedData);

        return Inertia::location(route('products.index'));
    }
    public function update(Request $request, Product $product)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'size' => 'nullable|string|max:255',
            'ingredients' => 'nullable|string',
            'category' => 'required|string|max:255',
            'stock' => 'required|integer|min:0',
        ]);

        $product->update($validatedData);

        return Inertia::location(route('products.index'));
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return Inertia::location(route('products.index'));
    }
}
