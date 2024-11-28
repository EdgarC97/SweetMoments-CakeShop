<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['client_id', 'order_date', 'delivery_date', 'status', 'notes'];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }

    // Defining possible order statuses as constants
    const STATUS_PENDING = 'pending';
    const STATUS_IN_PROGRESS = 'in progress';
    const STATUS_READY = 'ready';
    const STATUS_DELIVERED = 'delivered';
}   
