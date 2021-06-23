@extends('adminlte::page')

@section('title', 'Danh sách truyện')

@section('content_header')
    <h1>Danh sách truyện</h1>
@stop

@section('content')
    <livewire:admin.comic />
@stop
@section('css')
    <link rel="stylesheet" href="{{ mix('css/admin.css') }}">
@stop
@section('js')
    <script>
        @if (Session::has('message'))
            toastr.options =
            {
            "closeButton" : true,
            "progressBar" : true
            }
            toastr.success("{{ session('message') }}",'Thành Công! 🙂');
        @endif

        @if (Session::has('error'))
            toastr.options =
            {
            "closeButton" : true,
            "progressBar" : true
            }
            toastr.error("{{ session('error') }}",'Thành Công! 🙂');
        @endif

        @if (Session::has('info'))
            toastr.options =
            {
            "closeButton" : true,
            "progressBar" : true
            }
            toastr.info("{{ session('info') }}",'Thành Công! 🙂');
        @endif

        @if (Session::has('warning'))
            toastr.options =
            {
            "closeButton" : true,
            "progressBar" : true
            }
            toastr.warning("{{ session('warning') }}",'Thành Công! 🙂');
        @endif

    </script>
    <script src="{{ mix('js/admin.js') }}"></script>
@stop
