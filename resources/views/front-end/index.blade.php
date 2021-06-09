@extends('layouts.index')
@section('head')
    <style>
        html {
            scroll-behavior: smooth;
        }

    </style>
@endsection
@section('content')
    @include('layouts.front-end.hero')
    <!-- /.hero -->
    @include('layouts.front-end.schedule')
    <!-- /.schedule -->
    @include('layouts.front-end.right-bar')
    <!-- /.right-bar -->
    <section class="main-content index">
        <div class="container">
            <div class="latest">
                <div class="caption" id="list-update"><a href="http://truyenqq.com/truyen-moi-cap-nhat.html"><span
                            class="starts-icon"></span>Truyện mới cập nhật</a></div>

                <x-frontend.comic-item :comics="$comics" />
                {{-- {{ $comics->links('vendor.pagination.custom') }} --}}

                <!-- /.list-stories -->
                <div class="has-text-centered">
                    <a href="{{ url('/', ['page', 2]) }}" class="view-more-btn">Xem thêm
                        nhiều truyện</a>
                </div>
            </div>
            <!-- /.latest -->
            <div class="female">
                <div class="caption" id="list-female"><a href="http://truyenqq.com/truyen-con-gai.html"><span
                            class="female-icon"></span>Truyện con gái</a></div>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-parent">
                        <x-frontend.comic-item :comics="$comics_female" />
                        <!-- /.list-stories -->
                    </div>
                </div>
            </div>
            <!-- /.female -->
            <div class="male">
                <div class="caption" id="list-male"><a href="http://truyenqq.com/truyen-con-trai.html"><span
                            class="male-icon"></span>Truyện con trai</a></div>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-parent">
                        <x-frontend.comic-item :comics="$comics_male" />

                        <!-- /.list-stories -->
                    </div>
                </div>
            </div>
            <!-- /.male -->
        </div>
        <div id="Top" class="scrollTop none">
            <span><a href=""><img
                        src="http://static.truyenqq.com/template/frontend/images/back-to-top-icon.png" /></a></span>
        </div>
    </section>
    <!-- /.main-content -->
    @include('layouts.front-end.quick-link')
    <!-- /.footer -->
    <!-- /.qr-modal -->
@endsection
