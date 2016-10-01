<?php
/**
 * Copyright 2016 Maksim Babenko <mb.babenoff@yandex.ru>
 * game.php at amulet.my
 * Created by Babenoff at 19.09.16 - 22:11
 */

return [
    'max_heroes' => 4,
    'max_level' => 55,
    'skills_tree_icon' => [
        FIGHT => 'fight_mini.png',
        MAGIC => 'magic_mini.png',
        WILD => 'wild_mini.png',
        DEATH => 'death_mini.png',
        CALLING => 'calling_mini.png',
        FORTIFICATION => 'fortification_mini.png',
        WILL => 'will_mini.png',
        DEVOTION => 'devotion_mini.png',
        ARTISTRY => 'artistry_mini.png',
        ILLUSION => 'illusion_mini.png'
    ],
    'console' => [
        'pwd' => 'qwerty'
    ],
    'validation' => [
        'user' => [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed'
        ]
    ],

    'hero' => [
        'stats_add' => [
            [[0,50],    2],
            [[50,55],   5]
        ]
    ],

    'start_locs' => [
        'elf' => 'west.w_solzreed.1095x240',
        'fer' => 'west.w_solzreed.1095x240',
        'nui' => 'west.w_solzreed.1095x240',
        'har' => 'west.w_solzreed.1095x240'
    ],

    'races_list' => ['nui', 'har', 'elf', 'fer', 'god']
];