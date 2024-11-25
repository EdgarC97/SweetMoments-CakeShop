<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = ['name', 'last_name', 'email', 'phone', 'address', 'created_at'];

    public function clientPreferences()
    {
        return $this->hasMany(Preference::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
