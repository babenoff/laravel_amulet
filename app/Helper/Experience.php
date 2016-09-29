<?php
/**
 * Copyright 2016 Maksim Babenko <mb.babenoff@yandex.ru>
 * Experience.php at amulet.my
 * Created by Babenoff at 23.09.16 - 0:24
 */

namespace App\Helper;


use Illuminate\Support\Facades\Config;

class Experience extends \ArrayIterator
{
    protected static $a = 1.97926;
    protected static $b = 1.86696;
    protected static $c = 0.632588;
    protected static $d = 1.11509;
    protected static $f = -4.06485;

    protected static function expToLevel($level)
    {
        $exp = self::$a * pow($level, self::$b) * atan(exp(self::$c * pow($level, self::$d) +
                self::$f));
        return ceil($exp);
    }

    /**
     * @param $maxLevel
     * @return Experience
     */
    public static function factory()
    {
        $maxLevel = Config::get('Game.max_level');
        $level = 0;
        $expTable = [];
        do {
            $level++;
            $exp = self::expToLevel($level);
            array_push($expTable, $exp);
        } while ($level < $maxLevel);
        return new self($expTable);
    }

    /**
     * @return int
     */
    public function getMaxLevel()
    {
        return $this->count();
    }

    /**
     * @param $level
     * @return int
     */
    public function getExpToLevel($level)
    {
        $level = $level - 1;
        if ($level < 0) {
            $level = 0;
        }
        return $this->offsetGet($level);
    }

}