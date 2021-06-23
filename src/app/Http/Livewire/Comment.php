<?php

namespace App\Http\Livewire;

use App\Models\Comic;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class Comment extends Component
{
    public $amount = 10;
    public $comic;
    public $all_comments_count;

    public $commentReplyingTo = null;
    public $reply_name = '';
    public $email;
    public $name;
    public $comment;

    protected $rules = [
        'name' => 'string|required|min:2',
        'email' => 'email:rfc,dns|required',
        'comment' => 'string|required|min:2|max:5000',
    ];

    public function mount(Comic $comic)
    {
        $this->comic = $comic;
        $this->all_comments_count = $this->comic->comments->count();
        $this->name = Auth::user()->name ?? null;
        $this->email = Auth::user()->email ?? null;
    }


    public function addReply($id)
    {
        $this->commentReplyingTo = \App\Models\Comment::find($id);
        $this->reply_name = '<strong>' . $this->commentReplyingTo->name . ' </strong>';
    }

    public function removeReply()
    {
        $this->commentReplyingTo = null;
        $this->reply_name = '';
    }

    public function like($id)
    {
        \App\Models\Comment::find($id)->update([
            'likes' => DB::raw('likes+1')
        ]);
    }

    public function submit()
    {
        $this->validate();

        $comment = new \App\Models\Comment;
        $comment->name = $this->name;
        $comment->email = $this->email;
        $comment->user_id = auth()->user()->id ?? null;
        $comment->comic_id = $this->comic->id;
        $comment->comment_id = $this->commentReplyingTo->id ?? null;
        $comment->body = $this->reply_name . nl2br($this->comment);
        $comment->save();

        if ($this->commentReplyingTo->user ?? false != auth()->user() ?? false ) {
            event(new \App\Events\ReplyComment($comment));
        }

        $this->commentReplyingTo = null;
        $this->all_comments_count += 1;
        $this->reset(['comment']);
    }

    public function loadMore()
    {
        $this->amount += 5;
    }

    public function render()
    {
        $comments = \App\Models\Comment::where("comic_id", $this->comic->id)
            ->where("comment_id", null)
            ->with('childrenComments')
            ->latest()
            ->take($this->amount)
            ->get();
        return view('livewire.comment', [
            'comments' => $comments
        ]);
    }
}
