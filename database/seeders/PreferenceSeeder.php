<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Preference;

class PreferenceSeeder extends Seeder
{
    public function run()
    {
        $preferences = [
            ['client_id' => 1, 'preference' => 'cake_type', 'quantity' => 1],
            ['client_id' => 1, 'preference' => 'icing_type', 'quantity' => 1],
            ['client_id' => 2, 'preference' => 'cake_type', 'quantity' => 1],
            ['client_id' => 2, 'preference' => 'icing_type', 'quantity' => 1],
            ['client_id' => 3, 'preference' => 'cake_type', 'quantity' => 1],
            ['client_id' => 3, 'preference' => 'icing_type', 'quantity' => 1],
            ['client_id' => 4, 'preference' => 'cake_type', 'quantity' => 1],
            ['client_id' => 4, 'preference' => 'icing_type', 'quantity' => 1],
            ['client_id' => 5, 'preference' => 'cake_type', 'quantity' => 1],
            ['client_id' => 5, 'preference' => 'icing_type', 'quantity' => 1],
            ['client_id' => 6, 'preference' => 'cake_type', 'quantity' => 1],
            ['client_id' => 6, 'preference' => 'icing_type', 'quantity' => 1],
            ['client_id' => 7, 'preference' => 'cake_type', 'quantity' => 1],
            ['client_id' => 7, 'preference' => 'icing_type', 'quantity' => 1],
            ['client_id' => 8, 'preference' => 'cake_type', 'quantity' => 1],
            ['client_id' => 8, 'preference' => 'icing_type', 'quantity' => 1],
            ['client_id' => 9, 'preference' => 'cake_type', 'quantity' => 1],
            ['client_id' => 9, 'preference' => 'icing_type', 'quantity' => 1],
            ['client_id' => 10, 'preference' => 'cake_type', 'quantity' => 1],
            ['client_id' => 10, 'preference' => 'icing_type', 'quantity' => 1],
        ];

        foreach ($preferences as $preference) {
            Preference::create($preference);
        }
    }
}