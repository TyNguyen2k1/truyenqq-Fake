<div class="top-search">
    <input wire:model.debounce.500ms='search' type="text" class="text-search"
        placeholder="Bạn cứ nhập từ khoá, còn lại để qq lo" />
    <button class="submit-btn btn_search"></button>
    @if (strlen($search) >= 2)
        <div class="list-results open">
            <!-- Add class 'open' to open list results -->
            <div class="list-container">
                @if ($comics_results->count() > 0)
                    {{-- <div class="title-search">Tìm kiếm gần đây</div> --}}
                    @foreach ($comics_results as $comic)
                        <div class="result-item">
                            <a href="{{ route('comic.detail', ['slug' => $comic->slug]) }}">
                                <div class="media">
                                    <figure class="media-left">
                                        <p class="image">
                                            <img src="{{ $comic->slider()->get()->first()->getFirstMediaUrl('slider', '80x105') }}"
                                                alt="{{ $comic->name }}">
                                        </p>
                                    </figure>
                                    <div class="media-content">
                                        <h4>{{ $comic->name }}</h4>
                                        <h6>Chương {{ $comic->chapters->count() -1 }}</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                    @endforeach
                @else
                    <div class="no-result" style="padding: 10px">Không Tìm Thấy Kết Quả Nào!</div>
                @endif
            </div>
        </div>
    @endif

    <!-- /.list-results -->
</div>
