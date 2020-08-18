<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'description', 'level',
    ];

    public function users(){
        return $this->hasMany(User::class);
    }
}
