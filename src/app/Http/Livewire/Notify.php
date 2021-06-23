<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Notify extends Component
{
    public function markAsRead($id)
    {
        $notification =
            auth()->user()
            ->notifications
            ->where('id', $id)->first();
            $notification->markAsRead();
        // return redirect()->route('comic.detail', ['slug' => $notification->data['comic_slug']]);
        return redirect('/truyen-tranh' . '/' . $notification->data['comic_slug'] . '#comment_' . $notification->data['id']);
    }
    public function render()
    {
        return view('livewire.notify');
    }
}
