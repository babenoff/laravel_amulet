<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Npc extends Model
{
    //
    protected $table = 'npc_lib';

    protected $fillable = [
        'hash',
        'title'
    ];
}
