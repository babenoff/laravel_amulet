<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Effect extends Model
{
    //
    protected $table = 'effects';

    protected $fillable = [
        'key', 'type', 'title', 'description', "effect"
    ];
}
