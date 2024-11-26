<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OrderDetail;


class OrderDetailSeeder extends Seeder
{
    public function run()
    {
        $orderDetails = [
            ['order_id' => 1, 'product_id' => 1, 'quantity' => 2, 'price' => 100],
            ['order_id' => 1, 'product_id' => 2, 'quantity' => 1, 'price' => 200],
            ['order_id' => 2, 'product_id' => 3, 'quantity' => 3, 'price' => 300],
            ['order_id' => 2, 'product_id' => 4, 'quantity' => 2, 'price' => 400],
            ['order_id' => 3, 'product_id' => 5, 'quantity' => 1, 'price' => 500],
            ['order_id' => 4, 'product_id' => 6, 'quantity' => 4, 'price' => 600],
            ['order_id' => 5, 'product_id' => 7, 'quantity' => 2, 'price' => 700],
            ['order_id' => 6, 'product_id' => 8, 'quantity' => 1, 'price' => 800],
            ['order_id' => 7, 'product_id' => 9, 'quantity' => 3, 'price' => 900],
            ['order_id' => 8, 'product_id' => 10, 'quantity' => 5, 'price' => 1000],
        ];

        foreach ($orderDetails as $orderDetail) {
            OrderDetail::create($orderDetail);
        }
    }
}
