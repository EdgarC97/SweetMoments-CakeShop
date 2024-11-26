<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Client;

class ClientSeeder extends Seeder
{
    public function run()
    {
        $clients = [
            ['name' => 'Juan', 'last_name' => 'Pérez', 'email' => 'juan.perez@example.com', 'phone' => '123456789', 'address' => 'Calle Ficticia 123'],
            ['name' => 'Ana', 'last_name' => 'Gómez', 'email' => 'ana.gomez@example.com', 'phone' => '987654321', 'address' => 'Calle Real 456'],
            ['name' => 'Carlos', 'last_name' => 'Martínez', 'email' => 'carlos.martinez@example.com', 'phone' => '111223344', 'address' => 'Avenida 2, 789'],
            ['name' => 'Luisa', 'last_name' => 'López', 'email' => 'luisa.lopez@example.com', 'phone' => '222334455', 'address' => 'Plaza Mayor 890'],
            ['name' => 'Pedro', 'last_name' => 'Hernández', 'email' => 'pedro.hernandez@example.com', 'phone' => '333445566', 'address' => 'Calle Real 101'],
            ['name' => 'Sofía', 'last_name' => 'Díaz', 'email' => 'sofia.diaz@example.com', 'phone' => '444556677', 'address' => 'Calle Principal 234'],
            ['name' => 'Javier', 'last_name' => 'Rodríguez', 'email' => 'javier.rodriguez@example.com', 'phone' => '555667788', 'address' => 'Avenida del Sol 567'],
            ['name' => 'Maria', 'last_name' => 'Sánchez', 'email' => 'maria.sanchez@example.com', 'phone' => '666778899', 'address' => 'Calle de la Luna 678'],
            ['name' => 'José', 'last_name' => 'García', 'email' => 'jose.garcia@example.com', 'phone' => '777889900', 'address' => 'Calle del Río 789'],
            ['name' => 'Raquel', 'last_name' => 'Martín', 'email' => 'raquel.martin@example.com', 'phone' => '888990011', 'address' => 'Avenida Libertad 1010'],
        ];

        foreach ($clients as $client) {
            Client::firstOrCreate(
                ['email' => $client['email']], // Verifica si el cliente ya existe por su email
                [
                    'name' => $client['name'],
                    'last_name' => $client['last_name'],
                    'phone' => $client['phone'],
                    'address' => $client['address'],
                ]
            );
        }
    }
}
