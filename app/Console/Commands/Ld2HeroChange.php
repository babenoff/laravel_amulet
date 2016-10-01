<?php

namespace App\Console\Commands;

use App\Hero;
use Illuminate\Console\Command;

class Ld2HeroChange extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ld2:hero:change';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Изменение героя';

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
        $name = $this->ask('Введите имя героя');
        $hero = Hero::where('name', $name)->first();
        if(!is_null($hero)) {
            $races = collect(config('game.races_list'))->map(function($item, $key){
                return trans('game.races.'.$item);
            });
            $race = $this->choice('Расса', $races->all());
            $gender = $this->choice('Пол', ['Муж.', 'Жен.']);
            $skills = [];
        } else {
            $this->error("Герой $name не найден");
        }
    }
}
