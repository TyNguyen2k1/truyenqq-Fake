<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use CyrildeWit\EloquentViewable\Contracts\Viewable;

class Comic extends Model implements HasMedia, Viewable
{
    use InteractsWithViews;
    use InteractsWithMedia;
    use HasFactory;

    protected $fillable = ['name', 'another_name', 'slug', 'description', 'author_id'];
    protected $removeViewsOnDelete = true;

    // date time format
    // public function getCreatedAtAttribute($value)
    // {
    //     return date('m/d/Y');
    // }

    // mối quan hệ nhiều nhiều với category thông qua bảng categories
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'comic_categories', 'comic_id', 'category_id')->orderBy('name')->withTimestamps();
    }

    /**
     * Get all of the chapters for the Comic
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function chapters()
    {
        return $this->hasMany(Chapter::class)->where('published_date', '<=', now());
    }

    /**
     * Get all of the chapters for the Comic
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function chaptersAll()
    {
        return $this->hasMany(Chapter::class);
    }

    // mối quan hệ ngược lại với bảng author
    public function author()
    {
        return $this->belongsTo(Author::class, 'author_id');
    }

    /**
     * Get the statistical associated with the Comic
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function statistical()
    {
        return $this->hasOne(Statistical::class,'comic_id');
    }

    /**
     * Get the Slider associated with the Comic
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function slider()
    {
        return $this->hasOne(Slider::class);
    }

    /**
     * Get all of the comments for the Comic
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * The user that belong to the Comic
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'comics_user');
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('190x247')
            ->width(190)
            ->height(247)
            ->sharpen(10);
    }

}
