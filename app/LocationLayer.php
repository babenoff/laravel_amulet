<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LocationLayer extends Model
{
    //
    //protected $table = 'location_layers';
    protected $fillable = [
        "terr_id",
        "hash",
        "description",
    ];

    public function territory(){
        return $this->belongsTo('App\Territory', 'terr_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function locations(){
        return $this->hasMany('App\Location', 'layer_id', 'id');
    }
}
