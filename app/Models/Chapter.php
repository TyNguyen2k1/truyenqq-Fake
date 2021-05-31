<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Chapter extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;

    protected $dates = ['published_date'];

    protected $fillable = ['comic_id', 'published_date'];

    // date time format
    // public function getCreatedAtAttribute($value)
    // {
    //     return date('m/d/Y');
    // }

    public function comic()
    {
        return $this->belongsTo(Comic::class);
    }
}
