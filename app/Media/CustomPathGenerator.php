<?php

namespace App\Media;

use App\Models\Chapter;
use App\Models\Comic;
use App\Models\Slider;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator;

class CustomPathGenerator implements PathGenerator
{
    /*
     * Get the path for the given media, relative to the root storage path.
     */
    public function getPath(Media $media): string
    {
        return $this->getBasePath($media) . '/';
    }

    /*
     * Get the path for conversions of the given media, relative to the root storage path.
     */
    public function getPathForConversions(Media $media): string
    {
        return $this->getBasePath($media) . '/conversions/';
    }

    /*
     * Get the path for responsive images of the given media, relative to the root storage path.
     */
    public function getPathForResponsiveImages(Media $media): string
    {
        return $this->getBasePath($media) . '/responsive-images/';
    }

    /*
     * Get a unique base path for the given media.
     */
    protected function getBasePath(Media $media): string
    {
        if ($media->model_type == Slider::class) {
            return 'Slider/' . $media->getKey();
        }
        if ($media->model_type == Comic::class) {
            return 'Comic/' . $media->getKey() . '/avatar';
        }
        if ($media->model_type == Chapter::class) {

            return 'Chapter/' . $media->getKey();
        }
        return $media->getKey();
    }
}