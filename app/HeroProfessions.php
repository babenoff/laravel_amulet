<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HeroProfessions extends Model
{
    //
    protected $table = 'hero_professions';
    protected $guarded = ['hero_id'];
    protected $fillable = [
        'mining',
        'logging',
        'herbalism',
        'fishing',
        'farming',
        'argiculture',
        'alchemy',
        'decorator',
        'engineer',
        'tanner',
        'stealing',
        'construction',
        'blacksmithing',
        'stonemason',
        'weaponry',
        'trade',
        'cooking',
        'typography',
        'lingering'
    ];

    public function hero(){
        return $this->belongsTo('App\Hero');
    }
}
