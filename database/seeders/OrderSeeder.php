<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Order;
use App\Models\Client; // Importamos el modelo Client
use Carbon\Carbon; // Para trabajar con fechas

class OrderSeeder extends Seeder
{
    public function run()
    {
        // Creamos 10 órdenes de ejemplo
        $orders = [
            [
                'client_id' => 1,
                'order_date' => Carbon::now()->subDays(2), // 2 días atrás
                'delivery_date' => Carbon::now()->addDays(3), // 3 días adelante
                'status' => Order::STATUS_PENDING,
                'notes' => 'Pedido urgente',
            ],
            [
                'client_id' => 2,
                'order_date' => Carbon::now()->subDays(3), // 3 días atrás
                'delivery_date' => Carbon::now()->addDays(4), // 4 días adelante
                'status' => Order::STATUS_IN_PROGRESS,
                'notes' => 'Con prioridad para entrega',
            ],
            [
                'client_id' => 3,
                'order_date' => Carbon::now()->subDays(5), // 5 días atrás
                'delivery_date' => Carbon::now()->addDays(2), // 2 días adelante
                'status' => Order::STATUS_READY,
                'notes' => 'Listo para entregar',
            ],
            [
                'client_id' => 4,
                'order_date' => Carbon::now()->subDays(1), // 1 día atrás
                'delivery_date' => Carbon::now()->addDays(1), // 1 día adelante
                'status' => Order::STATUS_DELIVERED,
                'notes' => 'Pedido entregado',
            ],
            [
                'client_id' => 5,
                'order_date' => Carbon::now()->subDays(4), // 4 días atrás
                'delivery_date' => Carbon::now()->addDays(5), // 5 días adelante
                'status' => Order::STATUS_PENDING,
                'notes' => 'Requiere confirmación de entrega',
            ],
            [
                'client_id' => 6,
                'order_date' => Carbon::now()->subDays(6), // 6 días atrás
                'delivery_date' => Carbon::now()->addDays(7), // 7 días adelante
                'status' => Order::STATUS_IN_PROGRESS,
                'notes' => 'En proceso de preparación',
            ],
            [
                'client_id' => 7,
                'order_date' => Carbon::now()->subDays(3), // 3 días atrás
                'delivery_date' => Carbon::now()->addDays(6), // 6 días adelante
                'status' => Order::STATUS_READY,
                'notes' => 'Listo para entrega',
            ],
            [
                'client_id' => 8,
                'order_date' => Carbon::now()->subDays(2), // 2 días atrás
                'delivery_date' => Carbon::now()->addDays(2), // 2 días adelante
                'status' => Order::STATUS_DELIVERED,
                'notes' => 'Entregado sin incidencias',
            ],
            [
                'client_id' => 9,
                'order_date' => Carbon::now()->subDays(7), // 7 días atrás
                'delivery_date' => Carbon::now()->addDays(4), // 4 días adelante
                'status' => Order::STATUS_PENDING,
                'notes' => 'Pedido a confirmar',
            ],
            [
                'client_id' => 10,
                'order_date' => Carbon::now()->subDays(1), // 1 día atrás
                'delivery_date' => Carbon::now()->addDays(2), // 2 días adelante
                'status' => Order::STATUS_IN_PROGRESS,
                'notes' => 'Preparando para el envío',
            ],
        ];

        // Insertamos los datos en la base de datos
        foreach ($orders as $order) {
            Order::create($order);
        }
    }
}