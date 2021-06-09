@extends('adminlte::page')

@section('title', 'Danh sách thể loại')

@section('content_header')
    <h1>Danh sách thể loại</h1>
@stop

@section('content')
    <livewire:admin.category />
@stop
@section('css')
    {{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> --}}
    <link rel="stylesheet" href="{{ mix('css/admin.css') }}">

@stop
@section('js')
    {{-- <script src="{{ mix('js/app.js') }}" defer></script> --}}
    <script src="{{ mix('js/admin.js') }}" defer></script>

@stop
