<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    protected $model = Order::class;

    public function definition()
    {
        return [
            'client_id' => Client::factory(),
            'order_date' => $this->faker->date(),
            'delivery_date' => $this->faker->date(),
            'status' => $this->faker->randomElement(['pending', 'in_progress', 'ready', 'delivered']),
            'notes' => $this->faker->text(100),
        ];
    }
}
