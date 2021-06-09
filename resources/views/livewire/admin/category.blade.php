<div class="container-fluid">
    <x-admin.admin-pace/>
    <!-- Modal form -->
    <div class="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
        wire:ignore.self>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="mb-0 text-lg leading-normal">
                        {{ $showEditModal ? 'Sửa Thể Loại' : 'Thêm Mới Thể Loại' }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form wire:submit.prevent="{{ $showEditModal ? 'editCategory' : 'addNewCategory' }}">
                        @csrf
                        <div class="card-body">
                            <div class="form-group">
                                <label for="inputName">Tên thể loại</label>
                                <input wire:model.defer='name' type="text" name="name" id="inputName"
                                    value="{{ old('name') }}"
                                    class="form-control @error('name') is-invalid @enderror">
                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label for="inputDescription">Mô tả thể loại</label>
                                <textarea wire:model.defer='description' id="inputDescription" name="description"
                                    class="form-control @error('description') is-invalid @enderror"
                                    rows="4">{{ old('description') }}</textarea>
                                @error('description')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
    <!-- Modal delete -->
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true" wire:ignore.self>
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="mb-0 text-lg leading-normal">Xóa</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Bạn có chắc chắn muốn xóa không ?</h4>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button wire:click.prevent="deleteCategory" type="button" class="btn btn-danger">Xóa</button>
                </div>

            </div>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-12">
            <div class="d-flex justify-content-between mb-2">
                <button wire:click="showFormAddNewCategory" class="btn btn-primary"> <i class="fa fa-plus-circle"
                        aria-hidden="true"></i> Thêm Mới Thể Loại
                </button>
                <div class="d-flex">
                    <input wire:model="searchText" type="text" class="form-control float-right"
                        placeholder="Search">
                </div>

            </div>

            <div class="card">
                {{-- <div class="card-header">
                    <h3 class="card-title">DataTable with minimal features &amp; hover style</h3>
                </div> --}}
                <!-- /.card-header -->
                <div class="card-body">
                    <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
                        <div class="row">
                            <div class="col-sm-12">
                                <table id="example2" class="table table-bordered table-hover dataTable dtr-inline"
                                    role="grid" aria-describedby="example2_info">
                                    <thead>
                                        <tr role="row">
                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1"
                                                colspan="1"
                                                aria-label="Rendering engine: activate to sort column ascending">
                                                #</th>
                                            <th class="sorting sorting_asc" tabindex="0" aria-controls="example2"
                                                rowspan="1" colspan="1"
                                                aria-label="Browser: activate to sort column descending"
                                                aria-sort="ascending">Tên thể loại</th>
                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1"
                                                colspan="1" aria-label="Platform(s): activate to sort column ascending">
                                                Mô tả</th>
                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1"
                                                colspan="1"
                                                aria-label="Engine version: activate to sort column ascending">Cập
                                                nhật
                                                lần cuối</th>
                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1"
                                                colspan="1" aria-label="CSS grade: activate to sort column ascending">
                                                Sự kiện</th>
                                        </tr>
                                    </thead>
                                    <tbody wire:loading.remove wire:target="searchText">
                                        @forelse ($categories as $category)
                                            <tr class="odd">
                                                <td class="dtr-control" tabindex="0">{{ $category->id }}</td>
                                                <td class="sorting_1">{{ $category->name }}</td>
                                                <td class="">{{ $category->description }}</td>
                                                <td>{{ $category->updated_at }}</td>
                                                <td class="project-actions text-center">
                                                    {{-- <a class="btn btn-primary btn-sm" href="#">
                                                        <i class="fas fa-folder">
                                                        </i>
                                                        View
                                                    </a> --}}
                                                    <a wire:click.prevent="showFormEdit({{ $category->id }})"
                                                        class="btn btn-info btn-sm" href="#">
                                                        <i class="fas fa-pencil-alt">
                                                        </i>
                                                        Edit
                                                    </a>
                                                    <a wire:click.prevent="showDeleteModal({{ $category->id }})"
                                                        class="btn btn-danger btn-sm" data-toggle="modal"
                                                        data-target="#deleteModal" href="#">
                                                        <i class="fas fa-trash">
                                                        </i>
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        @empty
                                            <tr class="text-center">
                                                <td colspan="5">
                                                    Không Có Kết Quả!
                                                </td>
                                            </tr>
                                        @endforelse
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div wire:loading.delay wire:target="searchText" class="col-12">
                            <x-admin.load-awesome/>
                        </div>

                        <div wire:loading.remove wire:target="searchText" class="row">
                            {{ $categories->links() }}
                        </div>
                    </div>
                </div>
                <!-- /.card-body -->
            </div>
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
</div>

<script>
    window.addEventListener('show-form', event => {
        $('#form').modal('show');
    })

</script>
