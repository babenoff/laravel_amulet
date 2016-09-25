<?php
/**
 * Copyright 2016 Maksim Babenko <mb.babenoff@yandex.ru>
 * ConsoleDecorator.php at amulet.my
 * Created by Babenoff at 24.09.16 - 16:18
 */

namespace App\Console;

interface ConsoleColors {

}

trait ConsoleDecorator
{
    protected $red = 31;

    protected function bold($str){
        return "\e[1m".$str."\e[0m";
    }

    protected function color($line, $colorId){
        return "\x1B[".$colorId."m".$line."\e[0m";
    }

    protected function tab(){
        return "\t";
    }

    protected function space($count = 1){
        $tmp = "";
        for ($i = 0; $i < $count; $i++){
            $tmp.=" ";
        }
        return $tmp;
    }
}