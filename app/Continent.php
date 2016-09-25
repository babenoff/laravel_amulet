<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Continent extends Model
{
    //
    protected $table = 'continents';

    protected $fillable = [
        'title',
        'hash'
    ];

    public function territories(){
        return $this->hasMany('App\Territory', 'cont_id', 'id');
    }
}
