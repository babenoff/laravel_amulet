<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    //
    protected $table = 'items_lib'
    , $fillable = [
        'key', 'description', 'options', 'type', 'cost'
    ];
}
