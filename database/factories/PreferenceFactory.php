<?php

namespace Database\Factories;

use App\Models\Preference;
use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;

class PreferenceFactory extends Factory
{
    protected $model = Preference::class;

    public function definition()
    {
        return [
            'client_id' => Client::factory(),
            'preference' => $this->faker->word(),
            'quantity' => $this->faker->numberBetween(1, 10),
        ];
    }
}
