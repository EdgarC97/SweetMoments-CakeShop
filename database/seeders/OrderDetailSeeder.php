<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OrderDetail;
use App\Models\Product;
use App\Models\Order;

class OrderDetailSeeder extends Seeder
{
    public function run()
    {
        $products = Product::all();
        $orders = Order::all();

        if ($products->isEmpty() || $orders->isEmpty()) {
            throw new \Exception('Products or Orders table is empty. Please run ProductSeeder and OrderSeeder first.');
        }

        $orderDetails = [
            ['order_id' => 1, 'product_id' => 1, 'quantity' => 2, 'price' => 35000],
            ['order_id' => 1, 'product_id' => 2, 'quantity' => 1, 'price' => 5000],
            ['order_id' => 2, 'product_id' => 3, 'quantity' => 3, 'price' => 40000],
            ['order_id' => 2, 'product_id' => 4, 'quantity' => 2, 'price' => 3000],
            ['order_id' => 3, 'product_id' => 5, 'quantity' => 1, 'price' => 45000],
            ['order_id' => 4, 'product_id' => 1, 'quantity' => 4, 'price' => 35000],
            ['order_id' => 5, 'product_id' => 2, 'quantity' => 2, 'price' => 5000],
            ['order_id' => 6, 'product_id' => 3, 'quantity' => 1, 'price' => 40000],
            ['order_id' => 7, 'product_id' => 4, 'quantity' => 3, 'price' => 3000],
            ['order_id' => 8, 'product_id' => 5, 'quantity' => 5, 'price' => 45000],
        ];

        foreach ($orderDetails as $orderDetail) {
            if ($orders->contains('id', $orderDetail['order_id']) && $products->contains('id', $orderDetail['product_id'])) {
                OrderDetail::create($orderDetail);
            } else {
                $this->command->info("Skipping invalid order detail: Order ID {$orderDetail['order_id']} or Product ID {$orderDetail['product_id']} does not exist.");
            }
        }
    }
}

