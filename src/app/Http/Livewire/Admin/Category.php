<?php

namespace App\Http\Livewire\Admin;

use Illuminate\Support\Str;
use Livewire\Component;
use Livewire\WithPagination;

class Category extends Component
{
    use WithPagination;

    public $name, $description;
    public $showEditModal = false;
    public $categoryId;
    public $searchText='';

    protected $paginationTheme = 'bootstrap';

    protected $rules = [
        'name' => ['required', 'string', 'unique:categories,name', 'max:255'],
        'description' => ['required', 'string'],
    ];

    public function resetForm()
    {
        $this->reset(['name', 'description']);
    }

    public function showFormAddNewCategory()
    {
        $this->showEditModal = false;
        $this->resetForm();
        $this->dispatchBrowserEvent('show-form');
    }

    public function addNewCategory()
    {
        $this->validate();
        \App\Models\Category::create([
            'name' => $this->name,
            'slug' => Str::slug($this->name),
            'description' => $this->description
        ]);
        $this->resetForm();
        $this->dispatchBrowserEvent('hide-form', ['type' => 'success', 'message' => 'Thêm Danh Mục']);
        return redirect()->back();
    }

    public function showFormEdit($id)
    {
        $category = \App\Models\Category::findOrFail($id);
        $this->categoryId = $id;
        $this->showEditModal = true;
        $this->name = $category->name;
        $this->description = $category->description;
        $this->dispatchBrowserEvent('show-form');
    }

    public function editCategory()
    {
        $this->validate();
        \App\Models\Category::findOrFail($this->categoryId)->update([
            'name' => $this->name,
            'slug' => Str::slug($this->name),
            'description' => $this->description
        ]);
        $this->resetForm();
        $this->dispatchBrowserEvent('hide-form', ['type' => 'success', 'message' => 'Sửa Danh Mục']);
    }

    public function showDeleteModal($id)
    {
        $this->categoryId = $id;
        // $this->dispatchBrowserEvent('show-delete-modal
    }

    public function deleteCategory()
    {
        $category = \App\Models\Category::findOrFail($this->categoryId);
        $category->delete();
        $this->dispatchBrowserEvent('hide-delete-modal', ['type' => 'success', 'message' => 'Xóa Danh Mục']);
        return redirect()->back();
    }

    public function render()
    {
        $category = \App\Models\Category::query()
            ->where('name', 'like', '%' . $this->searchText . '%')
            ->latest();
        return view('livewire.admin.category', [
            'categories' => $category->paginate(5)
        ]);
    }
}
