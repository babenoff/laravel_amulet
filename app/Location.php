<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    //
    protected $table = 'game_locations';

    protected $fillable = [
        'hash',
        'title',
        'description',
        'pvp',
        'doors'
    ];

    public function heroes(){
        return $this->hasMany('App\OnlineHeroes');
    }

    public function offlineUsers(){
        $this->belongsTo('App\Hero', 'loc_offline');
    }

    public function layer(){
        return $this->belongsTo('App\LocationLayer', 'layer_id');
    }

    /*protected function getDoorsAttribute($doors){
        return preg_split('|', $doors);
    }*/

    protected function setDoorsAttribute(array $doors){
        $this->attributes['doors'] = implode('|', $doors);
    }
}
