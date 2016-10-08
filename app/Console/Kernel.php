<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
        'App\Console\Commands\Ld2RolesSet',
        'App\Console\Commands\Ld2UserCreate',
        'App\Console\Commands\Ld2UserRemove',
        'App\Console\Commands\Ld2HeroChange',
        'App\Console\Commands\Ld2HeroAddMoney',
        'App\Console\Commands\Ld2EconomicCommand',
        'App\Console\Commands\Ld2JournalServer',
        'App\Console\Commands\Ld2CreateApiTokens',
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')
        //          ->hourly();
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
