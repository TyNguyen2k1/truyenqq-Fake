@extends('layouts.index')
@section('title')
    Truyện đang theo dõi
@endsection
@section('content')
    <section class="main-content">
        <div class="container story-list">
            <div class="title-list">Truyện Đang Theo Dõi</div>
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-parent">
                    <livewire:comic-item />
                </div>
            </div>

        </div>
    </section>
@endsection
