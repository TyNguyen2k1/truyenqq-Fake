<?php

namespace App\Http\Livewire;

use App\Models\Comic;
use App\Models\Statistical;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class FollowButton extends Component
{
    public $comic;
    public $isFollow;

    protected $listeners = ['follow'];

    public function follow()
    {
        if (Auth::user()->comic()->find($this->comic->id)) {
            DB::delete('delete from comics_user where comic_id = ? and user_id = ? ', [$this->comic->id, Auth::user()->id]);
            Statistical::find($this->comic->id)->update([
                'number_of_followers' => DB::raw('number_of_followers-1')
            ]);
            $this->isFollow = false;
            return back();
        }
        Auth::user()->comic()->attach($this->comic->id);
        $this->isFollow = true;
        Statistical::find($this->comic->id)->update([
            'number_of_followers' => DB::raw('number_of_followers+1')
        ]);
    }

    public function render()
    {
        return view('livewire.follow-button');
    }
}
