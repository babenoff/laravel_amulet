<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /** @var User $user */
        $user = Auth::user();
        $heroes = $user->heroes()->getEager()->all();
        $tree = [];
        $test = FIGHT|FORTIFICATION|WILL;
        $treeCount = count(trans('skills.tree'));
        foreach ($heroes as $hero){
            $tree[$hero->id] = [];
            $class = $hero->hero_class;
            for($i = 0; $i < $treeCount; $i++){
                $flag=(int)$class;
                $flag=$flag>>$i;
                if($flag>0)
                    $cBits=log($flag,2);
                else $cBits=0;
                $newFlag=$flag|1;
                if($newFlag==$flag){
                    array_push($tree[$hero->id], 1<<$i);
                   //$tree[$hero->id][$i] = 1<<$i;
                }
            }
        }
        return view('home', [
            'heroes' => $heroes,
            'skills_tree' => $tree
        ]);
    }
}
