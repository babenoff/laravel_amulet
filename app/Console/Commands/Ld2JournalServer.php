<?php

namespace App\Console\Commands;

use App\Socket\Journal;
use Illuminate\Console\Command;
use Ratchet\Http\HttpServer;
use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;

class Ld2JournalServer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ld2:journal:server {--D|debug=false}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Запуск socket сервера журнала';

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
     * @return void
     */
    public function handle()
    {
        //
        $debug = $this->option('debug');
        $server = IoServer::factory(
            new HttpServer(
                new WsServer(
                    new Journal($this->output, $debug)
                )
            ),
            8080
        );

        $server->run();
        //$server->handleData('test message from server');
    }
}
