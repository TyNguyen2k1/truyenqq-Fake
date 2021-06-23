@extends('adminlte::page')

@section('title', 'Thêm truyện mới')

@section('content_header')
    <h1>Thêm truyện mới</h1>
@stop
@section('content')
    <div class="col-md-12">
        <x-admin.admin-pace />
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Thêm truyện mới</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form action="{{ route('admin.comic.store') }}" method="post" enctype="multipart/form-data">
                @csrf
                <div class="card-body">
                    <div class="form-group">
                        <label for="inputName">Tên truyện</label>
                        <input type="text" name="name" id="inputName" value="{{ old('name') }}"
                            class="form-control @error('name') is-invalid @enderror">
                        @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="inputName">Tên khác (<i>nếu có</i>)</label>
                        <input type="text" name="another_name" value="{{ old('another_name') }}"
                            class="form-control @error('another_name') is-invalid @enderror">
                        @error('another_name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="cover">Chọn ảnh đại diện</label>
                        <input type="file" value="{{ old('avatar') }}"
                            class="form-control @error('avatar') is-invalid @enderror" name="avatar" id="avatar" />
                        @error('avatar')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="cover">Chọn ảnh slider</label>
                        <input type="file" value="{{ old('slider') }}"
                            class="form-control @error('slider') is-invalid @enderror" name="slider" id="slider" />
                        @error('slider')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="inputDescription">Mô tả truyện</label>
                        <textarea id="inputDescription" name="description"
                            class="form-control @error('description') is-invalid @enderror"
                            rows="4">{{ old('description') }}</textarea>
                        @error('description')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label>Chọn danh mục</label>
                        <select class="select2 @error('categories_id') is-invalid @enderror" name="categories_id[]"
                            multiple="multiple" data-placeholder="Chọn thể loại" style="width: 100%;">
                            @foreach ($categories as $id => $category)
                                <option value="{{ $id }}">{{ $category }}</option>
                            @endforeach
                        </select>
                        @error('categories_id')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label>Chọn tác giả</label>
                        <select class="select2 @error('author_id') is-invalid @enderror" name="author_id"
                            style="width: 100%;">
                            <option selected value=""></option>
                            @foreach ($authors as $id => $author)
                                <option value="{{ $id }}">{{ $author }}</option>
                            @endforeach
                        </select>
                        @error('author_id')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <!-- /.form-group -->
                    <input type="submit" value="Tạo mới truyện" class="btn btn-success">
                </div>
            </form>
        </div>
    </div>
@stop
@section('css')
    <!-- daterange picker -->
    <link rel="stylesheet" href="{{ asset('/vendor/daterangepicker/daterangepicker.css') }}">
    <!-- iCheck for checkboxes and radio inputs -->
    <link rel="stylesheet" href="{{ asset('/vendor/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <!-- Tempusdominus Bootstrap 4 -->
    <link rel="stylesheet" href="{{ asset('/vendor/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css') }}">
    <!-- Select2 -->
    <link rel="stylesheet" href="{{ asset('/vendor/select2/css/select2.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/vendor/select2-bootstrap4-theme/select2-bootstrap4.min.css') }}">
    <!-- Bootstrap4 Duallistbox -->
    <link rel="stylesheet" href="{{ asset('/vendor/bootstrap4-duallistbox/bootstrap-duallistbox.min.css') }}">
    <!-- BS Stepper -->
    <link rel="stylesheet" href="{{ asset('/vendor/bs-stepper/css/bs-stepper.min.css') }}">
    <!-- dropzonejs -->
    <link rel="stylesheet" href="{{ asset('/vendor/dropzone/min/dropzone.min.css') }}">

    <style>
        .select2-container .select2-selection--single {
            min-height: 40px;
        }

    </style>
@endsection
@section('js')
    <!-- Select2 -->
    <script src="{{ asset('/vendor/select2/js/select2.full.min.js') }}"></script>
    <!-- Bootstrap4 Duallistbox -->
    <script src="{{ asset('/vendor/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js') }}"></script>
    <!-- InputMask -->
    <script src="{{ asset('/vendor/moment/moment.min.js') }}"></script>
    <script src="{{ asset('/vendor/inputmask/jquery.inputmask.min.js') }}"></script>
    <!-- date-range-picker -->
    <script src="{{ asset('/vendor/daterangepicker/daterangepicker.js') }}"></script>
    <!-- Tempusdominus Bootstrap 4 -->
    <script src="{{ asset('/vendor/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}"></script>
    <!-- Bootstrap Switch -->
    <script src="{{ asset('/vendor/bootstrap-switch/js/bootstrap-switch.min.js') }}"></script>
    <!-- BS-Stepper -->
    <script src="{{ asset('/vendor/bs-stepper/js/bs-stepper.min.js') }}"></script>
    <!-- dropzonejs -->
    <script src="{{ asset('/vendor/dropzone/min/dropzone.min.js') }}"></script>
    <!-- bs-custom-file-input -->
    <script src="{{ asset('/vendor/bs-custom-file-input/bs-custom-file-input.min.js') }}"></script>
    <!-- AdminLTE for demo purposes -->
    {{-- <script src="../../dist/js/demo.js"></script> --}}
    <!-- admin.js -->
    <script src="{{ mix('js/admin.js') }}" defer></script>
@stop
