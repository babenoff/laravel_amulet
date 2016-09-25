<?php
/**
 * Copyright 2016 Maksim Babenko <mb.babenoff@yandex.ru>
 * AbstractEffect.php at amulet.my
 * Created by Babenoff at 23.09.16 - 1:03
 */

namespace App\Effects;


abstract class AbstractEffect
{
    abstract public function effect(array &$data);
}