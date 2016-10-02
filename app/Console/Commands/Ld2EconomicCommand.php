<?php

namespace App\Console\Commands;

use App\Hero;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class Ld2EconomicCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ld2:economic';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Посмотреть сколько на данный момент денег крутится в игре';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        $money = collect([0,0,0,0,0]);
        $perPage = 50;
        $start = 0;
        $countHeroes = Hero::count();
        $headers = collect(trans('ui.moneys'))->sortBy(function($i, $k){
            return $k;
        })->values()->all();
        while ($start < $countHeroes) {
            /** @var Collection $moneys */
            $moneys = DB::table('heroes')->select('money')->skip($start)->take($perPage)->get();
            foreach ($moneys->toArray() as $val) {
                $m = json_decode($val->money, true);
                $money = $money->map(function($c, $key)use($m){
                    return $c + $m[$key];
                });
            }
            $start += $perPage;
        }
        $money = $money->sortBy(function($m, $k){
            return $k;
        })->values();
        $this->table(
            $headers,
            [
                $money->all()
            ]
        );
    }
}
