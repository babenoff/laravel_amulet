<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Territory extends Model
{
    //
    protected $table = 'game_territories';

    protected $fillable = [
        'hash',
        'title',
        'description',
        'condition',
        'climate',
        'levels'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function continent(){
        return $this->belongsTo('App\Continent', 'cont_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function neighbors(){
        return $this->belongsToMany('App\Territory', 'territory_neighbors', 'parent', 'child');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function layers(){
        return $this->hasMany('App\LocationLayer', 'terr_id', 'id');
    }

    protected function getConditionAttribute($condition){
        return json_decode($condition, true);
    }

    protected function setConditionAttribute(array $conditions){
        $this->attributes['condition'] = json_encode($conditions);
    }
}
