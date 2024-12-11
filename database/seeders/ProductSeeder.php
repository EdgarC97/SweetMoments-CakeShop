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
            ],
            [
                'name' => 'Macarons Surtidos',
                'description' => 'Delicados macarons franceses en variedad de sabores',
                'price' => 15000,
                'size' => 'Caja de 6',
                'ingredients' => 'Harina de almendra, azúcar glas, claras de huevo, colorantes naturales',
                'category' => 'Postres Finos',
                'stock' => 20
            ],
            [
                'name' => 'Pie de Limón',
                'description' => 'Tarta de limón con merengue suave y base crujiente',
                'price' => 30000,
                'size' => 'Mediana',
                'ingredients' => 'Harina, mantequilla, limones, azúcar, huevos',
                'category' => 'Tartas',
                'stock' => 7
            ],
            [
                'name' => 'Brownie con Nueces',
                'description' => 'Brownie húmedo de chocolate con nueces crujientes',
                'price' => 4000,
                'size' => 'Individual',
                'ingredients' => 'Chocolate, mantequilla, azúcar, huevos, nueces',
                'category' => 'Brownies',
                'stock' => 30
            ],
            [
                'name' => 'Tiramisú',
                'description' => 'Clásico postre italiano con café y queso mascarpone',
                'price' => 35000,
                'size' => 'Mediano',
                'ingredients' => 'Queso mascarpone, café, bizcochos, cacao en polvo',
                'category' => 'Postres Internacionales',
                'stock' => 6
            ],
            [
                'name' => 'Donas Glaseadas',
                'description' => 'Donas esponjosas con variedad de glaseados',
                'price' => 2500,
                'size' => 'Individual',
                'ingredients' => 'Harina, levadura, azúcar, huevos, glaseado',
                'category' => 'Donas',
                'stock' => 40
            ],
            [
                'name' => 'Torta de Zanahoria',
                'description' => 'Torta húmeda de zanahoria con frosting de queso crema',
                'price' => 38000,
                'size' => 'Grande',
                'ingredients' => 'Zanahorias, harina, aceite, nueces, queso crema',
                'category' => 'Tortas',
                'stock' => 9
            ],
            [
                'name' => 'Croissants de Almendra',
                'description' => 'Croissants hojaldrados rellenos de crema de almendra',
                'price' => 6000,
                'size' => 'Individual',
                'ingredients' => 'Harina, mantequilla, almendras, azúcar, leche',
                'category' => 'Panadería',
                'stock' => 15
            ]
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}