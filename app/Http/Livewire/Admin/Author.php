<?php

namespace App\Http\Livewire\Admin;

use Illuminate\Support\Str;
use Livewire\Component;
use Livewire\WithPagination;

class Author extends Component
{
    use WithPagination;

    public $name;
    public $showEditModal = false;
    public $authorId;
    public $searchText='';

    protected $paginationTheme = 'bootstrap';

    protected $rules = [
        'name' => ['required', 'string', 'unique:authors,name', 'max:255'],
    ];

    public function resetForm()
    {
        $this->reset(['name']);
    }

    public function showFormAddNewAuthor()
    {
        $this->showEditModal = false;
        $this->resetForm();
        $this->dispatchBrowserEvent('show-form');
    }

    public function addNewAuthor()
    {
        $this->validate();
        \App\Models\Author::create([
            'name' => $this->name,
            'slug' => Str::slug($this->name),
        ]);
        $this->resetForm();
        $this->dispatchBrowserEvent('hide-form', ['type' => 'success', 'message' => 'Thêm Danh Mục']);
        return redirect()->back();
    }

    public function showFormEdit($id)
    {
        $author = \App\Models\Author::findOrFail($id);
        $this->authorId = $id;
        $this->showEditModal = true;
        $this->name = $author->name;
        $this->dispatchBrowserEvent('show-form');
    }

    public function editAuthor()
    {
        $this->validate();
        \App\Models\Author::findOrFail($this->authorId)->update([
            'name' => $this->name,
            'slug' => Str::slug($this->name),
        ]);
        $this->resetForm();
        $this->dispatchBrowserEvent('hide-form', ['type' => 'success', 'message' => 'Sửa Danh Mục']);
    }

    public function showDeleteModal($id)
    {
        $this->authorId = $id;
        // $this->dispatchBrowserEvent('show-delete-modal');

    }

    public function deleteAuthor()
    {
        $author = \App\Models\Author::findOrFail($this->authorId);
        $author->delete();
        $this->dispatchBrowserEvent('hide-delete-modal', ['type' => 'success', 'message' => 'Xóa Danh Mục']);
        return redirect()->back();
    }

    public function render()
    {
        $author = \App\Models\Author::query()
            ->where('name', 'like', '%' . $this->searchText . '%')
            ->latest();
        return view('livewire.admin.author', [
            'authors' => $author->paginate(5)
        ]);
    }
}
