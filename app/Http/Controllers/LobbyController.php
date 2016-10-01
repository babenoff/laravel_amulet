<?php

namespace App\Http\Controllers;


use App\Helper\Experience;
use App\Hero;
//use Illuminate\Contracts\Validation\Validator;
use App\HeroProfessions;
use App\HeroStatistic;
use App\Location;
use App\OnlineHeroes;
use App\User;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\MessageBag;
use Illuminate\Support\ViewErrorBag;

class LobbyController extends Controller
{
    //
    public function __construct()
    {
        //$this->middleware('web');
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        /** @var User $user */
        $user = $request->user();
        $heroes = $user->heroes()->getEager()->all();
        $tree = [];
        $test = FIGHT | FORTIFICATION | WILL;
        $treeCount = count(trans('skills.tree'));
        foreach ($heroes as $hero) {
            $lO = $hero->loc_offline;
            if(is_null($lO)){
                $hero->loc_offline = Location::where('hash', config('game.start_locs.'.$hero->hero_race))->first();
            }
            $hero->save();
            $tree[$hero->id] = [];
            $class = $hero->hero_class;
            for ($i = 0; $i < $treeCount; $i++) {
                $flag = (int)$class;
                $flag = $flag >> $i;
                if ($flag > 0)
                    $cBits = log($flag, 2);
                else $cBits = 0;
                $newFlag = $flag | 1;
                if ($newFlag == $flag) {
                    array_push($tree[$hero->id], 1 << $i);
                    //$tree[$hero->id][$i] = 1<<$i;
                }
            }
        }
        return view('home', [
            'heroes' => $heroes,
            'skills_tree' => $tree,
            'errors' => $request->session()->get('errors', new ViewErrorBag)
        ]);
    }

    public function showNewHeroForm(Request $req)
    {
        /** @var User $user */
        $user = $req->user();
        $heroes = $user->heroes()->getEager()->all();
        if (count($heroes) < config('game.max_heroes')) {
            //$errors = $req->session()->get('errors', new ViewErrorBag());
            return view('new_hero', [
                'start_skills' => [
                    FIGHT => trans('skills.tree.' . FIGHT),
                    MAGIC => trans('skills.tree.' . MAGIC),
                    WILD => trans('skills.tree.' . WILD),
                    DEATH => trans('skills.tree.' . DEATH),
                    CALLING => trans('skills.tree.' . CALLING),
                    DEVOTION => trans('skills.tree.' . DEVOTION),
                ]
            ]);
        } else {
            return redirect()->back()->with('errors', [
                trans('errors.game.heroes_limit')
            ]);
        }
    }

    public function newHero(Request $request)
    {
        $data = $request->all();
        $v = $this->getValidationFactory();
        $validator = $v->make($request->all(), $this->rules());
        $validator->after(function ($val) {

        });
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator->getMessageBag())->withInput();
        } else {
            $userId = $request->user()->id;
            $startLoc = Location::where('hash', config('game.start_locs.' . $data["race"]))->first();
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
                        'hp' => [0, 0],
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
                        'mp' => [0, 0],
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
                'money' => [0, 0, 0, 0, 0, 0, 0],
                'loc_offline' => $startLoc
            ]);
            //$heroStatistic = new HeroStatistic();
            $hero->calculate();
            $request->user()->heroes()->save($hero);
            $hero->statistic()->save(new HeroStatistic());
            $hero->professions()->save(new HeroProfessions());
            return redirect()->route('lobby');
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

    public function connect(Request $request)
    {
        /** @var User $user */
        $user = $request->user();
        $heroId = $request->get('heroId');
        if ($user->heroExists($heroId)) {
            $request->session()->put('heroId', $heroId);
            /** @var Hero $hero */
            $hero = Hero::find($heroId);
            $locOffline = $hero->locOffline;
            $online = OnlineHeroes::where('hero_id', $heroId)->first();
            if (is_null($online)) {
                OnlineHeroes::create([
                    'hero_id' => $hero,
                    'loc_id' => $locOffline
                ]);
            }
            return redirect()->route('game-main');
        } else {
            return redirect()->route('lobby')->with('errors', [
               'Ошибка загрузки героя'
            ]);
        }
    }
}
