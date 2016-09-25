<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OnlineHeroes extends Model
{
    //
    protected $table = 'online_heroes';

    protected $fillable = [
        'hero_id',
        'loc_id'
    ];

    protected $dates = [
        'created_at',
        'update_at'
    ];

    public function hero(){
        return $this->belongsTo('App\Hero');
    }

    public function loc(){
        return $this->belongsTo('App\GameLocation', 'foreign_key', 'loc_id');
    }

}
