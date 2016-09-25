<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HeroStatistic extends Model
{
    //
    protected $table = 'hero_statistics';
    protected $guarded = ['hero_id'];
    protected $fillable = [
        'pvp_win',
        'pvp_loose',
        'arena_win',
        'arena_loose',
        'monster_win',
        'monster_loose',
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
