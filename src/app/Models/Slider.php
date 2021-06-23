<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Slider extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;

    /**
     * Get the comic that owns the Slider
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function comic()
    {
        return $this->belongsTo(Comic::class);
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('583x386')
            ->width(583)
            ->height(386)
            ->sharpen(10);
        $this->addMediaConversion('290x191')
            ->width(290)
            ->height(191)
            ->sharpen(10);
        $this->addMediaConversion('80x105')
            ->width(290)
            ->height(191)
            ->sharpen(10);
    }
}
