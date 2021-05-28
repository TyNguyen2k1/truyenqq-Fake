@extends('adminlte::page')

@section('title', 'Thêm thể loại')

@section('content_header')
    <h1>Thêm thể loại</h1>
@stop
@section('content')
    <div class="col-md-12">
        <x-admin-pace></x-admin-pace>
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Thêm thể loại</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form action="{{ route('admin.category.edit') }}" method="POST">
                @csrf
                <div class="card-body">
                    <div class="form-group">
                        <label for="inputName">Tên thể loại</label>
                        <input type="text" name="name" id="inputName" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="inputDescription">Mô tả thể loại</label>
                        <textarea id="inputDescription" name="description" class="form-control" rows="4"></textarea>
                    </div>
                    <input type="submit" value="Tạo mới thể loại" class="btn btn-success">
                </div>
            </form>
        </div>
    </div>
@stop
