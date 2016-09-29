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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hero(){
        return $this->belongsTo('App\Hero');
    }

    public function loc(){
        return $this->belongsTo('App\Location', 'loc_id');
    }

    protected function setLocIdAttribute(Location $loc){
        $this->attributes['loc_id'] = $loc->id;
    }

    protected function setHeroIdAttribute(Hero $hero){
        $this->attributes['hero_id'] = $hero->id;
    }

}
