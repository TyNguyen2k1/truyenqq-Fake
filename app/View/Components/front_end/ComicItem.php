<?php

namespace App\View\Components\front_end;

use App\Models\Comic;
use Illuminate\View\Component;

class ComicItem extends Component
{
    /**
     * Danh sach truyen
     *
     * @var \App\Models\Comic
     */
    public $comics;

    /**
     * co phai la danh sach theo doi
     *
     * @var \App\Models\Comic
     */
    public $isLibrary;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($comics, $isLibrary)
    {
        $this->comics = $comics;
        $this->isLibrary = $isLibrary;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.front_end.comic-item');
    }
}