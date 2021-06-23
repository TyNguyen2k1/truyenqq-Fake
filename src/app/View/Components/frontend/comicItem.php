<?php

namespace App\View\Components\frontend;

use Illuminate\View\Component;

class comicItem extends Component
{
    /**
     * Danh sach truyen
     *
     * @var \App\Models\Comic
     */
    public $comics;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($comics)
    {
        $this->comics = $comics;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.frontend.comic-item');
    }
}
