<?php

namespace App;

use App\Model\JournalMsg;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Collection;

/**
 * 
 * @package App\Hero
 */
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
        'money',
        'loc_offline',
        'journal'
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

    public function settings() {
        return $this->belongsTo('App\HeroSettings');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function locOffline(){
        return $this->hasOne('App\Location', 'hash', 'loc_offline');
    }

    public function toOffline() {
        /** @var OnlineHeroes $online */
        $online = OnlineHeroes::where('hero_id', $this->id)->first();
        $locOffline = $online->loc;
        $this->loc_offline = $locOffline;
        $this->save();
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

    protected function setLocOfflineAttribute(Location $locOffline){
            $race = $this->attributes['hero_race'];
            $hash = (is_null($locOffline->hash)) ? config('game.start_locs.'.$race) : $locOffline->hash;
        $this->attributes['loc_offline'] = $hash;
    }

    /*protected function getLocOfflineAttribute($val){
        return Location::where('hash', $val)->first();
    }*/
    /**
     * @param $val
     * @return \Illuminate\Support\Collection
     */
    protected function getJournalAttribute($val){
        $journal = collect(unserialize($val));
        return $journal;
    }

    /**
     * @param Collection $journal
     */
    protected function setJournalAttribute(Collection $journal){
        $this->attributes['journal'] = serialize($journal->all());
    }

    /**
     * @param string $msg
     */
    public function addMsgToJournal($msg){
        /** @var Collection $journal */
        $journal = $this->journal;
        $journalMsg = new JournalMsg($msg);
        $journal->push($journalMsg);
        $this->journal = $journal;
    }

    public function clearJournal(){
        $this->journal = collect([]);
    }

    public function clearOldMessagesFromJournal(){
        /** @var Collection $journal */
        $journal = $this->journal;
        $journal->each(function($msg, $key)use($journal){
            if($msg->date->getTimestamp() + $this->settings->journal_life < time()) {
                $journal->forget($key);
            }
        });
        $this->journal = $journal;
    }
}
