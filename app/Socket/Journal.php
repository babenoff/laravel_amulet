<?php
/**
 * Created by PhpStorm.
 * User: maksim
 * Date: 07.10.16
 * Time: 17:41
 */

namespace App\Socket;


use Ratchet\ConnectionInterface;
use Ratchet\MessageComponentInterface;
use Symfony\Component\Console\Output\OutputInterface;

class Journal implements MessageComponentInterface
{
    /**
     * @var \SplObjectStorage
     */
    protected $clients;
    /**
     * @var bool
     */
    protected $debug = false;
    /**
     * @var OutputInterface
     */
    protected $output;

    public function __construct(OutputInterface $output = null, $debug = false)
    {
        $this->clients = new \SplObjectStorage();
        $this->debug = $debug;
        if($debug and is_null($output)){
            throw new \RuntimeException("Output can not be null");
        }
        $this->output = $output;
    }

    /**
     * When a new connection is opened it will be passed to this method
     * @param  ConnectionInterface $conn The socket/connection that just connected to your application
     * @throws \Exception
     */
    function onOpen(ConnectionInterface $conn)
    {
        $this->clients->attach($conn);
        $this->log('client connected '.$conn->resourceId);
    }

    /**
     * This is called before or after a socket is closed (depends on how it's closed).  SendMessage to $conn will not result in an error if it has already been closed.
     * @param  ConnectionInterface $conn The socket/connection that is closing/closed
     * @throws \Exception
     */
    function onClose(ConnectionInterface $conn)
    {
        $this->clients->detach($conn);
        $this->log('client disconnected '.$conn->resourceId);
    }

    /**
     * If there is an error with one of the sockets, or somewhere in the application where an Exception is thrown,
     * the Exception is sent back down the stack, handled by the Server and bubbled back up the application through this method
     * @param  ConnectionInterface $conn
     * @param  \Exception $e
     * @throws \Exception
     */
    function onError(ConnectionInterface $conn, \Exception $e)
    {
        $this->clients->detach($conn);
        $this->log('Error: '.$e->getMessage());
    }

    /**
     * Triggered when a client sends data through the socket
     * @param  \Ratchet\ConnectionInterface $from The socket/connection that sent the message to your application
     * @param  string $msg The message received
     * @throws \Exception
     */
    function onMessage(ConnectionInterface $from, $msg)
    {
        // TODO: Implement onMessage() method.
        $numRecv = count($this->clients) - 1;
        echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n"
            , $from->resourceId, $msg, $numRecv, $numRecv == 1 ? '' : 's');

        foreach ($this->clients as $client) {
                // The sender is not the receiver, send to each client connected
                $client->send($msg);
        }
    }

    protected function log($msg){
        if($this->debug === true and !is_null($this->output)){
            $this->output->writeln($msg);
        }
    }
}