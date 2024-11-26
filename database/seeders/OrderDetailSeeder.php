<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OrderDetail;

class OrderDetailSeeder extends Seeder
{
    public function run()
    {
        OrderDetail::factory()->count(10)->create(); // Crear 10 detalles de orden de ejemplo
    }
}