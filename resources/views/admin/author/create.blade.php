@extends('adminlte::page')

@section('title', 'Thêm tác giả')

@section('content_header')
    <h1>Thêm tác giả</h1>
@stop
@section('content')
    <div class="col-md-12">
        <x-admin-pace></x-admin-pace>
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Thêm tác giả</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form action="{{ route('admin.author.store') }}" method="POST">
                @csrf
                <div class="card-body">
                    <div class="form-group">
                        <label for="inputName">Tên tác giả</label>
                        <input type="text" name="name" id="inputName" value="{{ old('name') }}"
                            class="form-control @error('name') is-invalid @enderror">
                        @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <input type="submit" value="Thêm mới tác giả" class="btn btn-success">
                </div>
            </form>
        </div>
    </div>
@stop
