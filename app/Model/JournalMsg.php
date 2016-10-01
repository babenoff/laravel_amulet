<?php
/**
 * Created by PhpStorm.
 * User: maksim
 * Date: 02.10.16
 * Time: 0:25
 */

namespace App\Model;


use DateTime;

class JournalMsg
{
    /**
     * @var \DateTime
     */
    public $date;

    public $msg;

    /**
     * JournalMsg constructor.
     * @param string $msg
     */
    public function __construct($msg, $date = 'now')
    {
        $this->msg = $msg;
        $this->date = ($date instanceof DateTime === false) ? new \DateTime($date) : $date;
    }

    public function __sleep()
    {
        // TODO: Implement __sleep() method.
        return [
            "date",
            "msg"
        ];
    }

    public function __toString()
    {
        // TODO: Implement __toString() method.
        return $this->msg;
    }
}