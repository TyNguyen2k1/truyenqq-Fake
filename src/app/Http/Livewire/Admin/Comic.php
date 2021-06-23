<?php

namespace App\Http\Livewire\Admin;

use Livewire\Component;
use Livewire\WithPagination;

class Comic extends Component
{
    use WithPagination;

    protected $paginationTheme = 'bootstrap';

    public $comicId;

    public function viewComic($id)
    {
        $this->comicId = $id;
    }

    public function deleteComic()
    {
        $comic = \App\Models\Comic::findOrFail($this->comicId);
        $comic->slider->delete();
        if ($comic->chapters ?? null != null) {
            $comic->chapters->delete();
        }
        $comic->delete();
        $this->dispatchBrowserEvent('hide-delete-modal', ['type' => 'success', 'message' => 'Xóa Truyện']);
        return redirect()->back();
    }

    public function render()
    {
        $comicDetail = \App\Models\Comic::find($this->comicId) ?? null;
        $comics = \App\Models\Comic::with('chapters');
        return view('livewire.admin.comic', [
            'comics' => $comics->paginate(5),
            'comicDetail' => $comicDetail
        ]);
    }
}
