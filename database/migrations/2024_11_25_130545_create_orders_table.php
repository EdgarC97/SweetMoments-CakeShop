<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained()->onDelete('cascade'); // Relación con clients
            $table->date('order_date'); // Fecha del pedido
            $table->date('delivery_date'); // Fecha de entrega
            $table->enum('status', ['pending', 'in progress', 'ready', 'delivered'])->default('pending'); // Estado de la orden
            $table->text('notes')->nullable(); // Notas sobre la orden
            $table->decimal('total_amount', 10, 2)->nullable(); // Monto total, ahora nullable
            $table->timestamps(); // Timestamps de created_at y updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};