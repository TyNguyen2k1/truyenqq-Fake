<?php

namespace App\Http\Livewire;

use App\Models\Comic;
use Livewire\Component;

class ListResults extends Component
{
    public $search = '';

    public function render()
    {
        $results = [];

        if (strlen($this->search) >= 2) {
            $results = Comic::where('name', 'LIKE', '%' . $this->search . '%')->get();
        }
        return view('livewire.list-results', [
            'comics_results' => collect($results)->take(10)
        ]);
    }
}
