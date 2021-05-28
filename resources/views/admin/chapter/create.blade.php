@extends('adminlte::page')

@section('title', 'Thêm chương mới')

@section('content_header')
    <h1>Thêm chương mới</h1>
@stop
@section('content')
    <div class="col-md-12">
        <x-admin-pace></x-admin-pace>
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Thêm chương mới</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form action="{{ route('admin.chapter.store') }}" method="post" enctype="multipart/form-data">
                @csrf
                <div class="card-body">
                    <div class="form-group">
                        <label>Chọn truyện</label>
                        <select class="select2 @error('comic_id') is-invalid @enderror" name="comic_id"
                            style="width: 100%;">
                            @foreach ($comics as $id => $comic)
                                <option value="{{ $id }}">{{ $comic }}</option>
                            @endforeach
                        </select>
                        @error('comic_id')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="cover">Chọn các ảnh của chương (<strong style="color: #e0a800">vui lòng sắp xếp trước
                                khi gửi.</strong> <u style="color:red"><i>VD:1.jpg, 2.jpg ...</i></u>)</label>
                        <input type="file" multiple class="form-control @error('chapter_images') is-invalid @enderror"
                            name="chapter_images[]">
                        @error('chapter_images')
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

    <script>
        $(function() {
            //Initialize Select2 Elements
            $('.select2').select2()

            //Initialize Select2 Elements
            $('.select2bs4').select2({
                theme: 'bootstrap4'
            })
        })
        $(function() {
            bsCustomFileInput.init();
        });

    </script>
@stop
