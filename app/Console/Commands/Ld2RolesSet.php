<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;
use Illuminate\Console\GeneratorCommand;
use Illuminate\Support\Facades\Config;
use League\Flysystem\Exception;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;

class Ld2RolesSet extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    //protected $signature = 'ld2:roles:set {email} {--R|role=user}';


    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Обновляет роль пользователя';

    protected $name = 'ld2:role:set';


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
        $pwd = $this->secret('Введите пароль:');
        if ($pwd == Config::get('Game.console.pwd')) {
            $email = $this->argument('email');
            if(!$email){
                $email = $this->ask('Введите E-Mail:');
            }
            $user = User::where('email', $email);
            $role = $this->option('role');
            if ($user) {
                $msg = "Поменять роль пользователя %s на %s";
                if ($this->confirm(sprintf($msg, $this->argument('email'), $role))) {
                    switch ($role) {
                        case 'user':
                            $setRole = User::ROLE_USER;
                            break;
                        case 'moder':
                            $setRole = User::ROLE_MODER;
                            break;
                        case 'qw':
                            $setRole = User::ROLE_QW;
                            break;
                        case 'admin':
                            $setRole = User::ROLE_ADMIN;
                            break;
                        default:
                            $setRole = User::ROLE_USER;
                            break;
                    }
                    //$user->role = $setRole;
                    try {
                        $user->update(['role' => $setRole]);
                    } catch (Exception $e){
                        $this->error($e->getMessage());
                    }
                }
            } else {
                $this->error(trans('errors.user.not_found', ['email' => $this->argument('email')]));
            }
        } else {
            $this->error('Неверный пароль');
        }
    }

    protected function getArguments()
    {
        return [
            ['email', InputArgument::REQUIRED, 'User email'],
        ];
    }

    protected function getOptions()
    {
        return [
            ['role', 'R', InputOption::VALUE_OPTIONAL, 'User role user|moder|qw|admin', 'user'],
        ];
    }

    public function getHelp()
    {
        return <<<END_HELP
{$this->getName()} email --role=user|moder|qw|admin
END_HELP;

    }

    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        // TODO: Implement getStub() method.
    }

    public function getName()
    {
        //return parent::getName(); // TODO: Change the autogenerated stub
        return 'ld2:roles:set';
    }
}
