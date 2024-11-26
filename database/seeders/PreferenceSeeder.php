<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Preference;

class PreferenceSeeder extends Seeder
{
    public function run()
    {
        Preference::factory()->count(10)->create(); // Crear 10 preferencias de clientes de ejemplo
    }
}
