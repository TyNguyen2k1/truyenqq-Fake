<?php

namespace App\Http\Livewire;

use App\Models\Statistical;
use Illuminate\Support\Facades\DB;
use Livewire\Component;
use \Illuminate\Session\SessionManager;

class LikeButton extends Component
{
    public $comic;

    public function like($id, SessionManager $session)
    {
        if (session('liked')) {
            return;
        }
        // DB::table('statisticals')->increment('number_of_likes'); // cach 2 de tang gia tri
        Statistical::find($id)->update([
            'number_of_likes' => DB::raw('number_of_likes+1')
        ]);
        $session->put('liked', 'liked');
    }

    public function render()
    {
        return view('livewire.like-button');
    }
}
