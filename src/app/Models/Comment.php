<?php

namespace App\Models;

use App\Events\ReplyComment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comment extends Model
{
    use HasFactory;
    protected $fillable=['name', 'email', 'user_id', 'comic_id', 'comment_id', 'body', 'likes'];

    /**
     * The event map for the model.
     *
     * @var array
     */
    // protected $dispatchesEvents = [
    //     'saved' => ReplyComment::class,
    // ];

    /**
     * Get the user that owns the Comment
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the comic that owns the Comment
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function comic()
    {
        return $this->belongsTo(Comic::class);
    }

    /**
     * Get all of the comments for the Comment
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class, 'comment_id');
    }

    /**
     * Get all of the childrenComments for the Comment
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function childrenComments()
    {
        return $this->hasMany(Comment::class, 'comment_id')->with('childrenComments')->with('user');
    }

    /**
     * Get the Comment that owns the Comment
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parentsComment()
    {
        return $this->belongsTo(Comment::class, 'comment_id')->with('parentsComment');
    }

}
