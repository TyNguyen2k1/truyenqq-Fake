@extends('adminlte::page')

@section('title', 'Danh sách thể loại')

@section('content_header')
    <h1>Danh sách thể loại</h1>
@stop

@section('content')
    <div class="container-fluid">
        <x-admin-pace></x-admin-pace>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">DataTable with minimal features &amp; hover style</h3>
                    </div>
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
                                                    aria-label="Engine version: activate to sort column ascending">Cập nhật
                                                    lần cuối</th>
                                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1"
                                                    colspan="1" aria-label="CSS grade: activate to sort column ascending">
                                                    Sự kiện</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($categories as $category)
                                                <tr class="odd">
                                                    <td class="dtr-control" tabindex="0">{{ $category->id }}</td>
                                                    <td class="sorting_1">{{ $category->name }}</td>
                                                    <td class="">{{ $category->description }}</td>
                                                    <td>{{ $category->updated_at }}</td>
                                                    <td class="project-actions text-center">
                                                        <a class="btn btn-primary btn-sm" href="#">
                                                            <i class="fas fa-folder">
                                                            </i>
                                                            View
                                                        </a>
                                                        <a class="btn btn-info btn-sm" href="#">
                                                            <i class="fas fa-pencil-alt">
                                                            </i>
                                                            Edit
                                                        </a>
                                                        <a class="btn btn-danger btn-sm" href="#">
                                                            <i class="fas fa-trash">
                                                            </i>
                                                            Delete
                                                        </a>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row">
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
@stop
@section('css')
@stop
@section('js')
@stop
