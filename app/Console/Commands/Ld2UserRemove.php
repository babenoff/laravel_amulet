<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;

class Ld2UserRemove extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ld2:user:remove {email} {--F|force}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        if(!$this->option('force')){
            if($this->confirm('Вы действительно хотите удалить пользователя '.$this->argument('email'))){
                $ok = true;
            } else {
                $ok = false;
            }
        } else {
            $ok = true;
        }
        if(true === $ok){
            User::where('email', $this->argument('email'))->delete();
        }
    }
}
