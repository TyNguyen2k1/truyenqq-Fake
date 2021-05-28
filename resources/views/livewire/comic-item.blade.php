@if (!$comics->first())
    <div class="warning-list box">Xin lỗi, không tìm thấy kết quả nào!!</div>
@else
    <ul class="list-stories grid-6">
        @foreach ($comics as $comic)
            @foreach ($comic->getMedia('comic') as $comicMediaItem)
                <li>
                    <div class="story-item">
                        @if ($isLibrary ?? true)
                            <span wire:click="unFollow('{{ $comic->id }}')" class="remove-subscribe"
                                title="Bỏ Theo Dõi" data-id="10025"><i class="far fa-times-circle"></i></span>
                        @endif
                        <a href="{{ route('comic.detail', ['slug' => $comic->slug]) }}"
                            title="{{ $comic->name }}"><img class="story-cover lazy_cover"
                                src="{{ $comicMediaItem->getUrl() }}" alt="{{ $comic->name }}"></a>
                        <div class="top-notice">
                            <span class="time-ago">
                                {{ Carbon\Carbon::parse($comic->chapters->last()->created_at)->diffForHumans() }}
                            </span> <span class="type-label hot">Hot</span>
                        </div>
                        <h3 class="title-book"><a href="{{ route('comic.detail', ['slug' => $comic->slug]) }}"
                                title="{{ $comic->name }}">{{ $comic->name }}</a></h3>
                        <div class="episode-book"><a
                                href="{{ route('comic.read', ['slug' => $comic->slug, 'chap' => $comic->chapters->count() - 1]) }}">
                                Chương {{ $comic->chapters->count() - 1 }} {{-- lay tong tru 1 = so luong chap hien tai --}}
                            </a></div>
                        <div class="more-info">
                            <div class="title-more">{{ $comic->name }}</div>
                            <p class="info">Tình trạng: Đang Cập Nhật</p>
                            <p class="info">Lượt xem: 56,948</p>
                            <p class="info">Lượt theo dõi: 749</p>
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
        @endforeach
    </ul>
@endif
