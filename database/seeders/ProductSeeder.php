<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $products = [
            [
                'name' => 'Torta de Chocolate',
                'description' => 'Deliciosa torta de chocolate con cobertura de ganache',
                'price' => 35000,
                'size' => 'Mediana',
                'ingredients' => 'Harina, chocolate, azúcar, huevos, leche',
                'category' => 'Tortas',
                'stock' => 10
            ],
            [
                'name' => 'Cupcakes de Vainilla',
                'description' => 'Suaves cupcakes de vainilla con frosting de buttercream',
                'price' => 5000,
                'size' => 'Individual',
                'ingredients' => 'Harina, vainilla, azúcar, huevos, mantequilla',
                'category' => 'Cupcakes',
                'stock' => 24
            ],
            [
                'name' => 'Cheesecake de Fresa',
                'description' => 'Cremoso cheesecake con topping de fresas frescas',
                'price' => 40000,
                'size' => 'Grande',
                'ingredients' => 'Queso crema, galletas, fresas, azúcar, mantequilla',
                'category' => 'Postres',
                'stock' => 5
            ],
            [
                'name' => 'Galletas Decoradas',
                'description' => 'Galletas de mantequilla decoradas con royal icing',
                'price' => 3000,
                'size' => 'Individual',
                'ingredients' => 'Harina, mantequilla, azúcar, huevos, royal icing',
                'category' => 'Galletas',
                'stock' => 50
            ],
            [
                'name' => 'Torta Red Velvet',
                'description' => 'Clásica torta red velvet con frosting de queso crema',
                'price' => 45000,
                'size' => 'Grande',
                'ingredients' => 'Harina, cacao, buttermilk, colorante rojo, queso crema',
                'category' => 'Tortas',
                'stock' => 8
            ]
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}

