<?php

namespace App\Listeners;

use App\Events\ReplyComment;
use App\Notifications\NewReplyCommentNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;

class SendReplyCommentNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ReplyComment  $event
     * @return void
     */
    public function handle(ReplyComment $event)
    {
        $user = $event->comment->parentsComment->user->get();
        Notification::send($user, new NewReplyCommentNotification($event->comment, $event->message));
    }
}
