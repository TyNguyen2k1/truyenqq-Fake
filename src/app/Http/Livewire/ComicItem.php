<?php

namespace App\Http\Livewire;

use App\Models\Comic;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class ComicItem extends Component
{

    public function unFollow($id)
    {
        DB::delete('delete from comics_user where comic_id = ? and user_id = ? ', [$id, Auth::user()->id]);
    }
    public function render()
    {
        return view('livewire.comic-item', [
            'comics' => Auth::user()->comics()->get()
            // 'comics' => Comic::with('users')->get()
        ]);
    }
}
