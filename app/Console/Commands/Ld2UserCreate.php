<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\Console\Input\InputOption;

class Ld2UserCreate extends Command
{

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ld2:user:create {email} {--N|name=} {--A|admin}';

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
        if(!$this->argument('email')) {
            $email = $this->ask('E-Mail');
        } else {
            $email = $this->argument('email');
        }
        if(!$this->option('name')) {
            $name = $this->ask('Имя');
        } else {
            $name = $this->option('name');
        }
        $pwd = $this->secret('Пароль');
        $pwd_c = $this->secret('Повторите пароль');
        $rules = Config::get('game.validation.user');
        $udata = [
            'name' => $name,
            'email' => $email,
            'password' => $pwd
        ];
        $udata['password_confirmation'] = $pwd_c;
        /** @var \Illuminate\Contracts\Validation\Validator $validator */
        $validator = Validator::make($udata, $rules);
        if ($validator->fails()) {
            //var_dump($validator->getMessageBag()->all());
            foreach ($validator->getMessageBag()->all() as $msg) {
                $this->error($msg);
            }
        } else {
            if ($this->option('admin')) {
                $udata["role"] = User::ROLE_ADMIN;
            } else {
                $udata["role"] = User::ROLE_USER;
            }
            $udata["password"] = bcrypt($udata["password"]);
            $user = User::create($udata);
        }
    }

    public function getOptions()
    {
        return [
            ['admin', 'A', InputOption::VALUE_OPTIONAL, 'User is admin']
        ];
    }
}
