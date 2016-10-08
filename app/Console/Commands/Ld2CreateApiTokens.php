<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;

class Ld2CreateApiTokens extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'api:tokens:create';

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
        $users = User::where('api_token', null)->get();
        $users->each(function($user){
            $user->api_token = str_random(60);
            $user->save();
        });
    }
}
