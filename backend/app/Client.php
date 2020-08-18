<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'user_id','street', 'number', 'complement', 'zipcode', 'neighborhood', 'city', 'uf',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
