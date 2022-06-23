<ul class="list-stories grid-6">
    @foreach ($comics as $comic)
        <li>
            <div class="story-item">
                <a href="{{ route('comic.detail', ['slug' => $comic->slug]) }}" title="{{ $comic->name }}"><img
                        class="story-cover lazy_cover" src="{{ $comic->getFirstMediaUrl('comic', '190x247') }}"
                        alt="{{ $comic->name }}"></a>
                <div class="top-notice">
                    <span class="time-ago">
                        {{ Carbon\Carbon::parse($comic->chapters->last()->created_at)->diffForHumans() }}
                    </span> <span class="type-label hot">Hot</span>
                </div>
                <h3 class="title-book"><a href="{{ route('comic.detail', ['slug' => $comic->slug]) }}"
                        title="{{ $comic->name }}">{{ $comic->name }}</a></h3>
                <div class="episode-book"><a
                        href="{{ route('comic.read', ['slug' => $comic->slug, 'chap' => $comic->chapters->count() - 1]) }}">
                        Chương {{ $comic->chapters->count() - 1 }}
                        {{-- lay tong tru 1 = so luong chap hien tai --}}
                    </a></div>
                <div class="more-info">
                    <div class="title-more">{{ $comic->name }}</div>
                    <p class="info">Tình trạng: Đang Cập Nhật</p>
                    {{-- <p class="info">Lượt xem: {{ views($comic)->count() }}</p> --}}
                    <p class="info">Lượt xem:
                    @if ($comic->views->first())
                        {{ $comic->views->first()->viewable_id }}
                    @else
                        0
                    @endif
                    </p>
                    <p class="info">Lượt theo dõi: {{ $comic->statistical->number_of_followers }}</p>
                    <div class="list-tags">
                        @foreach ($comic->categories as $comic_category)
                            <a class="blue"
                                href="{{ route('front-end.category', ['slug' => $comic_category->slug]) }}">{{ $comic_category->name }}</a>
                        @endforeach
                    </div>
                    <div class="excerpt">{{ $comic->description }}
                    </div>
                </div>
            </div>
            <!-- /.story-item -->
        </li>
    @endforeach
</ul>
