<?php

namespace App\Http\Controllers;


use App\Helper\Experience;
use App\Hero;
//use Illuminate\Contracts\Validation\Validator;
use App\HeroProfessions;
use App\HeroStatistic;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;

class LobbyController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function showNewHeroForm()
    {
        $heroes = DB::select('select * from heroes where user_id = :uid', ['uid' => Auth::user()->id]);
        if(count($heroes) < config('game.max_heroes')) {
            return view('new_hero', [
                'start_skills' => [
                    FIGHT => trans('skills.tree.' . FIGHT),
                    MAGIC => trans('skills.tree.' . MAGIC),
                    WILD => trans('skills.tree.' . WILD),
                    DEATH => trans('skills.tree.' . DEATH),
                    CALLING => trans('skills.tree.' . CALLING),
                    DEVOTION => trans('skills.tree.' . DEVOTION),
                ],
            ]);
        } else {
            return redirect()->back()->withErrors([
                "Превышен лимит на создание героев"
            ]);
        }
    }

    public function newHero(Request $request)
    {
        $data = $request->all();
        $v = $this->getValidationFactory(); $validator = $v->make($request->all(), $this->rules());
        $validator->after(function($val){

        });
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator->getMessageBag());
        } else {
            $userId = $request->user()->id;
            $hero = new Hero([
                'name' => $data["hero_name"],
                'location' => 'loc_test',
                'hero_sex' => $data["sex"],
                'hero_race' => $data["race"],
                'hero_class' => $data["class"],
                'hero_char' => [
                    "exp" => 0,
                    "need_exp" => Experience::factory()->getExpToLevel(1),
                    "jp" => [0, 5000],
                    "level" => 1,
                    "sp" => 0
                ],
                'hero_war' => [],
                'hero_stats' => [
                    'base' => [
                        "str" => 10,
                        "dex" => 10,
                        "int" => 10,
                        "con" => 10,
                        "wit" => 10
                    ],
                    'attack' => [
                        'boost' => [
                            'milly' => 0,
                            'range' => 0,
                            'magic' => 0,
                        ],
                        'hit' => [
                            'milly' => 0,
                            'range' => 0,
                            'magic' => 0
                        ],
                        'crit' => [
                            'milly' => 0,
                            'range' => 0,
                            'magic' => 0
                        ],
                        'crit_damage' => [
                            'milly' => 100,
                            'range' => 100,
                            'magic' => 100
                        ],
                        'damage_boost' => [
                            'milly' => 0,
                            'range' => 0,
                            'magic' => 0
                        ]
                    ],
                    'defence' => [
                        'hp' => [0,0],
                        'def' => [
                            'phys' => 0,
                            'magic' => 0
                        ],
                        'evasion' => [
                            'milly' => 0,
                            'range' => 0
                        ],
                        'parring' => 0,
                        'block' => [
                            'milly' => 0,
                            'range' => 0
                        ],
                        'resistance' => [
                            'milly' => 0,
                            'range' => 0,
                            'magic' => 0,
                        ]
                    ],
                    'other' => [
                        'mp' => [0,0],
                        'cast' => 100,
                        'att_speed' => [
                            'speed' => 100,
                            'milly' => 3
                        ],
                        'regen' => 0,
                        'regen_in_combat' => 0,
                        'medit' => 0,
                        'medit_in_combat' => 0
                    ]
                ],
                'hero_statistic' => [],
                'hero_effects' => [],
                'inventory' => [],
                'bank' => [],
                'equip' => [
                    'slot1' => [],
                    'slot2' => [],
                    'slot3' => [],
                    'slot4' => [],
                    'slot5' => [],
                    'slot6' => [],
                    'slot7' => [],
                    'slot8' => [],
                    'slot9' => [],
                    'slot10' => [],
                    'slot11' => [],
                    'slot12' => [],
                    'slot13' => [],
                    'slot14' => [],
                    'slot15' => [],
                    'slot16' => [],
                    'slot17' => [],
                    'slot18' => [],
                    'slot19' => [],
                    'slot20' => [],
                ],
                'money' => [0,0,0,0,0,0,0]
            ]);
            //$heroStatistic = new HeroStatistic();
            $hero->calculate();
            $request->user()->heroes()->save($hero);
            $hero->statistic()->save(new HeroStatistic());
            $hero->professions()->save(new HeroProfessions());
            return redirect('/lobby');
        }
    }

    protected function rules()
    {
        return [
            'hero_name' => 'required|alpha_dash|min:4|max:26|unique:heroes,name',
            'sex' => 'required|in:male,female',
            'race' => 'required|in:nui,har,elf,fer'
        ];
    }
}
