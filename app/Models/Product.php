<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'description', 'price', 'size', 'ingredients', 'category', 'stock'];

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_details')->withPivot('quantity');
    }
}

