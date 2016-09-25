<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Hero extends Model
{
    use SoftDeletes;
    //
    protected $table = 'heroes';

    protected $dates = ['deleted_at'];
    protected $guarded = ['user_id'];
    protected $fillable = [
       'name',
        'location',
        'hero_sex',
        'hero_race',
        'hero_class',
        'hero_char',
        'hero_war',
        'hero_stats',
        'hero_statistic',
        'hero_effects',
        'inventory',
        'bank',
        'equip',
        'money'
    ];

    public function user() {
        $this->belongsTo('App\User');
    }

    public function professions(){
        return $this->hasOne('App\HeroProfessions');
    }

    public function statistic() {
        return $this->hasOne('App\HeroStatistic');
    }

    public function calculate($newHero = false){
        $char = $this->hero_char;
        $stats = $this->hero_stats;


        $stats["defence"]["hp"][1] = $char["level"] * 150 +
            $stats["base"]["wit"]*12+100;

        $stats['other']['mp'][1] = $char["level"] * 100 +
            $stats["base"]["int"]*12+100;
        if($newHero){
            $stats["defence"]["hp"][0] = $stats["defence"]["hp"][1];
            $stats['other']['mp'][0] = $stats['other']['mp'][1];
        }

        $this->hero_stats = $stats;
    }

    protected function getHeroStatsAttribute($val){
        return json_decode($val, true);
    }

    protected function setHeroStatsAttribute(array $heroStats){
        $this->attributes['hero_stats'] = json_encode($heroStats);
    }

    protected function getHeroEffectsAttribute($val){
        return json_decode($val, true);
    }

    protected function setHeroEffectsAttribute(array $effects){
        $this->attributes['hero_effects'] = json_encode($effects);
    }



    protected function addEffect($effId, $time = null, $effData = []){
        $effects = $this->hero_effects;
        $effects[$effId] = [
            'time' => $time,
            'data' => $effData
        ];
        $this->hero_effects = $effects;
    }

    protected function hasEffect($effId){
        $effects = $this->hero_effects;
        return isset($effects[$effId]);
    }

    protected function getHeroCharAttribute($val){
        return json_decode($val, true);
    }

    protected function setHeroCharAttribute(array $attr){
        $this->attributes["hero_char"] = json_encode($attr);
    }

    protected function getHeroWarAttribute($val){
        return json_decode($val, true);
    }

    protected function setHeroWarAttribute(array $heroStats){
        $this->attributes['hero_war'] = json_encode($heroStats);
    }

    protected function getHeroStatisticAttribute($val){
        return json_decode($val, true);
    }

    protected function setHeroStatisticAttribute(array $heroStats){
        $this->attributes['hero_statistic'] = json_encode($heroStats);
    }

    protected function getInventoryAttribute($val){
        return unserialize($val);
    }

    protected function setInventoryAttribute(array $heroStats){
        $this->attributes['inventory'] = serialize($heroStats);
    }

    protected function getBankAttribute($val){
        return unserialize($val);
    }

    protected function setBankAttribute(array $heroStats){
        $this->attributes['bank'] = serialize($heroStats);
    }

    protected function getEquipAttribute($val){
        return unserialize($val);
    }

    protected function setEquipAttribute(array $equip){
        $this->attributes['equip'] = serialize($equip);
    }

    protected function getMoneyAttribute($val){
        return json_decode($val, true);
    }

    protected function setMoneyAttribute(array $money){
        $this->attributes['money'] = json_encode($money);
    }
}
