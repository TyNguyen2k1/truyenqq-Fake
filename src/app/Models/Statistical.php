<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Statistical extends Model
{
    use HasFactory;
    protected $fillable = ['number_of_likes', 'number_of_views', 'number_of_followers'];

    /**
     * Get the comic that owns the Statistical
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function comic()
    {
        return $this->belongsTo(Comic::class,'comic_id');
    }
}
