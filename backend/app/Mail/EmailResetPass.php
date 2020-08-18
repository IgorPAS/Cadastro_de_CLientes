<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailResetPass extends Mailable
{
    use Queueable, SerializesModels;
    public $token;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($t)
    {
       $this->token = $t;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.emailresetpass');
    }
}
