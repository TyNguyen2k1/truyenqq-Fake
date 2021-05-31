@extends('layouts.index')
@section('title')
    {{ $comic->name . ' - ' . $comic->another_name }} Tiếng Việt
@endsection


<!-- /.top-bar -->
<!-- /.login-modal -->
<!-- /.notify-modal -->
<!-- /.main-menu -->
@section('content')
    <section class="main-content">
        <div class="container has-background-white story-detail">
            <div id="path">
                <ol class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="{{ route('/') }}">
                            <span itemprop="name">Trang Chủ</span>
                        </a>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="http://truyenqq.com/truyen-tranh/ane-naru-mono-3224">
                            <span itemprop="name">{{ $comic->name }}</span>
                        </a>
                        <meta itemprop="position" content="2" />
                    </li>
                </ol>
            </div>
            <div class="block01">
                <div class="left"><img src="{{ $comic->getFirstMediaUrl('comic', '190x247') }}"
                        alt="{{ $comic->name }}" />
                </div>
                <div class="center" itemscope="" itemtype="http://schema.org/Book">
                    <h1 itemprop="name">{{ $comic->name }}</h1>
                    <div class="txt">
                        @if ($comic->another_name != '')
                            <span class="info-item">Tên Khác: {{ $comic->another_name }}</span>
                        @endif
                        <p class="info-item">Tác giả: <a class="org"
                                href="{{ route('front-end.author', ['slug' => $comic->author->slug]) }}">{{ $comic->author->name }}</a>
                        </p>
                        <p class="info-item">Tình trạng: {{ $comic->status ? 'Hoàn Thành' : 'Đang Cập Nhật' }}</p>
                        <div>
                            <span>Thống kê:</span>
                            <span class="sp01"><i class="fas fa-thumbs-up"></i> <span
                                    class="sp02 number-like">{{ $comic->statistical->number_of_likes }}</span></span>
                            <span class="sp01"><i class="fas fa-heart"></i> <span
                                    class="sp02">{{ $comic->statistical->number_of_followers }}</span></span>
                            <span class="sp01"><i class="fas fa-eye"></i> <span
                                    class="sp02">{{ views($comic)->count() }}</span></span>
                        </div>
                    </div>
                    <ul class="list01">
                        @foreach ($comic->categories as $comic_categories)
                            <li class="li03"><a
                                    href="{{ route('front-end.category', ['slug' => $comic_categories->slug]) }}">{{ $comic_categories->name }}</a>
                            </li>
                        @endforeach
                    </ul>

                    <ul class="story-detail-menu">
                        <li class="li01"><a href="{{ route('comic.read', ['slug' => $comic->slug, 'chap' => 0]) }}"
                                class="button is-danger is-rounded"><span class="btn-read"></span>Đọc từ đầu</a>
                        </li>
                        <livewire:follow-button :comic="$comic"
                            :isFollow="Auth::check() && Auth::user()->comics()->find($comic->id)" />
                        <livewire:like-button :comic="$comic" />
                    </ul>
                    <div class="txt txt01 story-detail-info" itemprop="description">
                        <p>{{ $comic->description }}</p>
                    </div>
                </div>
            </div>
            <ul class="story-detail-menu">
                <li class="li01"><a href="{{ route('comic.read', ['slug' => $comic->slug, 'chap' => 1]) }}"
                        class="button is-danger is-rounded"><span class="btn-read"></span>Đọc từ đầu</a></li>
                <li class="li02"><a href="javascript:void(0);"
                        class="button is-danger is-rounded btn-subscribe subscribeBook" data-page="index"
                        data-id="3224"><span class="fas fa-heart"></span>Theo dõi</a></li>
                <li class="li03"><a href="javascript:void(0);" class="button is-danger is-rounded btn-like"
                        data-id="3224"><span class="fas fa-thumbs-up"></span>Thích</a></li>
            </ul>
            @if ($comic->categories->contains('name', 'Adult') == true)
                <p class="alert alert-danger warning-info">
                    <span>Cảnh báo độ tuổi:</span>
                    Truyện tranh {{ $comic->name }} có thể có nội dung và hình ảnh nhạy cảm, không phù hợp với lứa tuổi
                    của
                    bạn. Nếu bạn dưới 16 tuổi, vui lòng chọn một truyện khác để giải trí. Chúng tôi sẽ không chịu
                    trách
                    nhiệm liên quan nếu bạn bỏ qua cảnh báo này.
                </p>
            @endif

            <div class="block02">
                <div class="title">
                    <h2 class="story-detail-title">Danh sách chương</h2>
                </div>
                <div class="box">
                    @foreach ($comic->chapters as $comicChapterList)
                        <div class="works-chapter-list">

                            <div class="works-chapter-item row">
                                <div class="col-md-10 col-sm-10 col-xs-8 ">
                                    <a target="_blank"
                                        href="{{ route('comic.read', ['slug' => $comic->slug, 'chap' => $loop->remaining]) }}">Chương
                                        {{ $loop->remaining }}</a> {{-- $loop->remaining	Vòng lặp còn phải lặp thêm bao nhiêu lần nữa. --}}
                                </div>
                                <div class="col-md-2 col-sm-2 col-xs-4 text-right">
                                    {{ $comicChapterList->created_at->format('m/d/Y') }} </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
            <livewire:comment :comic="$comic" />
        </div>
    </section>
    <div id="list_emoji" class="modal fade">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close close-emoji"><span aria-hidden="true">&times;</span></button>
                <span class="modal-title">Biểu Tượng Cảm Xúc</span>
            </div>
            <div class="modal-body"></div>
        </div>
    </div>
    <!-- /.main-content -->
    <script type="text/javascript">
        var urlComment = 'http://truyenqq.com/frontend/comment/index';
        var urlCommentLoad = 'http://truyenqq.com/frontend/comment/list';
        var urlCommentRemove = 'http://truyenqq.com/frontend/comment/remove';
        var urlLikeComment = 'http://truyenqq.com/frontend/comment/like';
        var urlCommentEmoji = 'http://truyenqq.com/frontend/comment/load-emoji';

    </script>
    <!-- /.footer -->
    <div class="modal qr-modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="qr-section">
                <div class="caption">Quét mã QRCODE để tải ứng dụng QQ</div>
                <img class="qr-img" src="http://static.truyenqq.com/template/frontend/images/app-qrcode.png" alt="qr" />
                <div class="caption">Hoặc tải từ kho ứng dụng</div>
                <ul>
                    <li><a rel="nofollow" href="https://itunes.apple.com/us/app/truyenqq/id1282215661?ls=1&mt=8"><span
                                class="app-store-icon"></span></a></li>
                    <li><a rel="nofollow" href="https://play.google.com/store/apps/details?id=com.truyenqq.pro"><span
                                class="google-play-icon"></span></a></li>
                </ul>
            </div>
            <!-- /.qr-section -->
            <button class="close-button close-icon"></button>
            <!-- /.close-button -->
        </div>
    </div>
    <!-- /.qr-modal -->
@endsection
