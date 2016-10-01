<?php

namespace App;

use App\Model\JournalMsg;
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
        return $this->hasMany('App\OnlineHeroes', 'loc_id');
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
        $this->attributes['doors'] = implode("|",$doors);
    }

    protected function getDoorsAttribute($val){
        return explode("|", $val);
    }

    public function getNeighborsIds(){
        $doors = [];
        $allDoors = $this->doors;
        for ($i = 1; $i <= count($allDoors); $i+=2){
            array_push($doors, $allDoors[$i]);
        }
        return $doors;
    }

    public function addToJournalAll($msg, array $blackListIds = []){
        $this->heroes->each(function($hero)use($blackListIds, $msg){
            if(!in_array($hero->hero->id, $blackListIds)) {
                $hero->hero->addMsgToJournal($msg);
                $hero->hero->save();
            }
        });
        return $this;
    }
}
