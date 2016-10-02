<?php

namespace App;

use App\Exceptions\NoMoneyExceprion;
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

    const MONEY_GOLD = 0;
    const MONEY_SILVER = 1;
    const MONEY_COPPER = 2;
    const MONEY_DUBLON = 3;
    const MONEY_DELFIAN_STAR = 4;
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

    public function user()
    {
        $this->belongsTo('App\User');
    }

    public function professions()
    {
        return $this->hasOne('App\HeroProfessions');
    }

    public function statistic()
    {
        return $this->hasOne('App\HeroStatistic');
    }

    public function settings()
    {
        return $this->belongsTo('App\HeroSettings');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function locOffline()
    {
        return $this->hasOne('App\Location', 'hash', 'loc_offline');
    }

    public function toOffline()
    {
        /** @var OnlineHeroes $online */
        $online = OnlineHeroes::where('hero_id', $this->id)->first();
        $locOffline = $online->loc;
        $this->loc_offline = $locOffline;
        $this->save();
    }

    public function calculate($newHero = false)
    {
        $char = $this->hero_char;
        $stats = $this->hero_stats;
        $lvlDown = $char["level"];
        $lvlHight = 0;
        if ($char["level"] < 1) {
            $char["level"] = 1;
            $this->hero_char = $char;
            $lvlDown = 1;
            $lvlHight = 1;
        } elseif ($char["level"] > 50 and $char["level"] <= config('game.max_level')) {
            $lvlDown = 50;
            $lvlHight = $char["level"] - 50;
        } elseif ($char["level"] > config("game.max_level")) {
            $char["level"] = config("game.max_level");
            $lvlDown = 50;
            $lvlHight = $char["level"] - 50;
        }

        $baseStat_I = 8 + $lvlDown * 2 + $lvlHight * 10;

        $str_I = $baseStat_I;
        $dex_I = $baseStat_I;
        $int_I = $baseStat_I;
        $con_I = $baseStat_I;
        $wid_I = $baseStat_I;

        $stats["base"]["str"] = $str_I;
        $stats["base"]["dex"] = $dex_I;
        $stats["base"]["int"] = $int_I;
        $stats["base"]["con"] = $con_I;
        $stats["base"]["wid"] = $wid_I;


        $stats["defence"]["hp"][1] = $char["level"] * 150 +
            $stats["base"]["con"] * 12 + 100;

        $stats['other']['mp'][1] = $char["level"] * 100 +
            $stats["base"]["int"] * 12 + 100;
        if ($newHero) {
            $stats["defence"]["hp"][0] = $stats["defence"]["hp"][1];
            $stats['other']['mp'][0] = $stats['other']['mp'][1];
        }

        $stats["attack"]["boost"]["milly"] = round($stats["base"]["str"] * 0.2, 2);
        $stats["attack"]["boost"]["range"] = round($stats["base"]["dex"] * 0.2, 2);
        $stats["attack"]["boost"]["magic"] = round($stats["base"]["int"] * 0.2, 2);
        $stats["attach"]["boost"]["heal"] = round($stats["base"]["wid"] * 0.2, 2);

        $this->hero_stats = $stats;

        $this->save();
    }

    protected function getHeroStatsAttribute($val)
    {
        return json_decode($val, true);
    }

    protected function setHeroStatsAttribute(array $heroStats)
    {
        $this->attributes['hero_stats'] = json_encode($heroStats);
    }

    protected function getHeroEffectsAttribute($val)
    {
        return json_decode($val, true);
    }

    protected function setHeroEffectsAttribute(array $effects)
    {
        $this->attributes['hero_effects'] = json_encode($effects);
    }


    protected function addEffect($effId, $time = null, $effData = [])
    {
        $effects = $this->hero_effects;
        $effects[$effId] = [
            'time' => $time,
            'data' => $effData
        ];
        $this->hero_effects = $effects;
    }

    protected function hasEffect($effId)
    {
        $effects = $this->hero_effects;
        return isset($effects[$effId]);
    }

    protected function getHeroCharAttribute($val)
    {
        return json_decode($val, true);
    }

    protected function setHeroCharAttribute(array $attr)
    {
        $this->attributes["hero_char"] = json_encode($attr);
    }

    protected function getHeroWarAttribute($val)
    {
        return json_decode($val, true);
    }

    protected function setHeroWarAttribute(array $heroStats)
    {
        $this->attributes['hero_war'] = json_encode($heroStats);
    }

    protected function getHeroStatisticAttribute($val)
    {
        return json_decode($val, true);
    }

    protected function setHeroStatisticAttribute(array $heroStats)
    {
        $this->attributes['hero_statistic'] = json_encode($heroStats);
    }

    protected function getInventoryAttribute($val)
    {
        return unserialize($val);
    }

    protected function setInventoryAttribute(array $heroStats)
    {
        $this->attributes['inventory'] = serialize($heroStats);
    }

    protected function getBankAttribute($val)
    {
        return unserialize($val);
    }

    protected function setBankAttribute(array $heroStats)
    {
        $this->attributes['bank'] = serialize($heroStats);
    }

    protected function getEquipAttribute($val)
    {
        return unserialize($val);
    }

    protected function setEquipAttribute(array $equip)
    {
        $this->attributes['equip'] = serialize($equip);
    }

    protected function getMoneyAttribute($val)
    {
        return json_decode($val, true);
    }

    protected function setMoneyAttribute(array $money)
    {
        $this->attributes['money'] = json_encode($money);
    }

    protected function setLocOfflineAttribute(Location $locOffline)
    {
        $race = $this->attributes['hero_race'];
        $hash = (is_null($locOffline->hash)) ? config('game.start_locs.' . $race) : $locOffline->hash;
        $this->attributes['loc_offline'] = $hash;
    }

    /*protected function getLocOfflineAttribute($val){
        return Location::where('hash', $val)->first();
    }*/
    /**
     * @param $val
     * @return \Illuminate\Support\Collection
     */
    protected function getJournalAttribute($val)
    {
        $journal = collect(unserialize($val));
        return $journal;
    }

    /**
     * @param Collection $journal
     */
    protected function setJournalAttribute(Collection $journal)
    {
        $this->attributes['journal'] = serialize($journal->all());
    }

    /**
     * @param string $msg
     */
    public function addMsgToJournal($msg)
    {
        /** @var Collection $journal */
        $journal = $this->journal;
        $journalMsg = new JournalMsg($msg);
        $journal->push($journalMsg);
        $this->journal = $journal;
    }

    public function clearJournal()
    {
        $this->journal = collect([]);
    }

    public function clearOldMessagesFromJournal()
    {
        /** @var Collection $journal */
        $journal = $this->journal;
        $journal->each(function ($msg, $key) use ($journal) {
            if ($msg->date->getTimestamp() + $this->settings->journal_life < time()) {
                $journal->forget($key);
            }
        });
        $this->journal = $journal;
    }

    public function addDublon($count)
    {
        $this->_addCustomMoney($count, 3);
    }

    public function removeDublon($count)
    {
        $this->_removeCustomMoney($count, 3);
    }

    public function addDelfianStar($count)
    {
        $this->_addCustomMoney($count, 4);
    }

    public function removeDelfianStar($count)
    {
        if ($this->enoughMoney($count, self::MONEY_DELFIAN_STAR)) {
            $this->_removeCustomMoney($count, 4);
        } else {
            throw new NoMoneyExceprion();
        }
    }

    public function addCopper($count)
    {
        if ($count > 100) {
            $copper = $count % 100;
            $silver = floor($count / 100);
            $this->addSilver($silver);
        } else {
            $copper = $count;
        }
        $money = $this->money;
        if ($money[2] + $copper >= 100) {
            $this->addSilver(1);
            $money = $this->money;
            $money[2] = $money[2] + $copper - 100;
        } else {
            $money[2] += $copper;
        }
        $this->money = $money;
    }

    public function addSilver($count)
    {
        if ($count > 100) {
            $silver = $count % 100;
            $gold = floor($count / 100);
            $this->addGold($gold);
        } else {
            $silver = $count;
        }
        $money = $this->money;
        if ($money[1] + $silver >= 100) {
            $this->addGold(1);
            $money = $this->money;
            $money[1] = $money[1] + $silver - 100;
        } else {
            $money[1] += $silver;
        }
        $this->money = $money;
    }

    public function addGold($count)
    {
        $this->_addCustomMoney($count, 0);
    }

    public function removeGold($count)
    {
        if ($this->enoughMoney($count, 0)) {
            $this->_removeCustomMoney($count, 0);
        } else {
            throw new NoMoneyExceprion();
        }
    }

    public function removeSilver($count)
    {
        if ($this->enoughMoney($count, 1)) {
            $this->_removeCustomMoney($count, self::MONEY_SILVER);
        } else {
            $gold = floor($count / 100);
            $silver = $count % 100;
            if ($gold < 1) {
                $gold = 1;
                $silver = $count;
            }
            $this->removeGold($gold);
            $money = $this->money;
            $money[self::MONEY_SILVER] = 100 - ($silver - $money[self::MONEY_SILVER]);
            $this->money = $money;
        }
    }

    /**
     * @param $count
     */
    public function removeCopper($count)
    {
        if ($this->enoughMoney($count, self::MONEY_COPPER)) {
            $this->_removeCustomMoney($count, self::MONEY_COPPER);
        } else {
            $silver = floor($count / 100);
            $copper = $count % 100;
            if ($silver < 1) {
                $silver = 1;
                $copper = $count;
            }
            $this->removeSilver($silver);
            $money = $this->money;
            $money[self::MONEY_COPPER] = 100 - ($copper - $money[self::MONEY_COPPER]);
            $this->money = $money;
        }
    }

    /**
     * Достаточно ли средств
     * @param $count
     * @param int $moneyId
     * @return bool
     */
    public function enoughMoney($count, $moneyId = self::MONEY_COPPER)
    {
        $money = $this->money;
        $res = false;
        switch ($moneyId) {
            case self::MONEY_COPPER:
                if ($money[self::MONEY_COPPER] >= $count) {
                    $res = true;
                } else {
                    $res = $this->enoughMoney(1, self::MONEY_SILVER);
                }
                break;
            case self::MONEY_SILVER:
                if ($money[self::MONEY_SILVER] >= $count) {
                    $res = true;
                } else {
                    $res = $this->enoughMoney(1, self::MONEY_GOLD);
                }
                break;
            default:
                $res = $money[$moneyId] >= $count;
                break;
        }
        return $res;
    }

    protected function _addCustomMoney($count, $moneyId)
    {
        $money = $this->money;
        $money[$moneyId] += $count;
        $this->money = $money;
    }

    protected function _removeCustomMoney($count, $moneyId)
    {
        $money = $this->money;
        if (isset($money[$moneyId])) {
            if ($count > $money[$moneyId]) {
                $count = $money[$moneyId];
            }
            $money[$moneyId] -= $count;
        } else {
            $money[$moneyId] = 0;
        }
        $this->money = $money;
    }

    protected function convertMoney($count, $moneyId, &$moneyArr = [0, 0, 0])
    {
        switch ($moneyId) {
            case 2:
                $newCount = $moneyArr[2] + $count;
                if ($newCount < 100) {
                    $moneyArr[2] = $newCount;
                } else {
                    $copper = $newCount % 100;
                    $moneyArr[2] = $copper;
                    $silver = floor($newCount / 100);
                    $this->convertMoney($silver, 1, $moneyArr);
                }
                break;
            case 1:
                $newCount = $moneyArr[$moneyId] + $count;
                if ($newCount < 100) {
                    $moneyArr[1] = $newCount;
                } else {
                    $silver = $newCount % 100;
                    $moneyArr[1] = $silver;
                    $gold = floor($newCount / 100);
                    $this->convertMoney($gold, 0, $moneyArr);
                }
                break;
            default:
                $moneyArr[0] += $count;
                break;
        }
    }
}
