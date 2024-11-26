<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $products = [
            ['name' => 'Producto A', 'description' => 'Descripción del Producto A', 'price' => 100, 'stock' => 50],
            ['name' => 'Producto B', 'description' => 'Descripción del Producto B', 'price' => 200, 'stock' => 40],
            ['name' => 'Producto C', 'description' => 'Descripción del Producto C', 'price' => 300, 'stock' => 30],
            ['name' => 'Producto D', 'description' => 'Descripción del Producto D', 'price' => 400, 'stock' => 20],
            ['name' => 'Producto E', 'description' => 'Descripción del Producto E', 'price' => 500, 'stock' => 10],
            ['name' => 'Producto F', 'description' => 'Descripción del Producto F', 'price' => 600, 'stock' => 15],
            ['name' => 'Producto G', 'description' => 'Descripción del Producto G', 'price' => 700, 'stock' => 25],
            ['name' => 'Producto H', 'description' => 'Descripción del Producto H', 'price' => 800, 'stock' => 35],
            ['name' => 'Producto I', 'description' => 'Descripción del Producto I', 'price' => 900, 'stock' => 45],
            ['name' => 'Producto J', 'description' => 'Descripción del Producto J', 'price' => 1000, 'stock' => 50],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}