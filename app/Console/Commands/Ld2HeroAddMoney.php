<?php

namespace App\Console\Commands;

use App\Hero;
use Illuminate\Console\Command;

class Ld2HeroAddMoney extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ld2:hero:money {name} {--A|add=0}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Добавление денег персонажу';

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
        $hero = Hero::where('name', $this->argument('name'))->first();
        $moneyArr = ["золото", "серебро", "медь"];
        if(!is_null($hero)) {
            $moneyId = $this->choice('Чего хотите добавить?', $moneyArr, 2);
            if($this->option('add')>0){
                $count = $this->option('add');
            } else {
                $count = $this->ask('Сколько '.$moneyId." добавить?");
            }
            $key = array_keys($moneyArr, $moneyId);
            $hero->addMoney($count, $key[0]);
            $hero->save();
            $this->info('Готово');
        } else {
            $this->error("Герой {$this->argument("name")} не найден");
        }
    }

}
