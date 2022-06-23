<section class="hero">
    <div class="container">
        <div class="tile is-ancestor">
            <div class="tile is-3 is-vertical is-parent">
                @foreach ($popular_comics as $comic)
                    @if ($loop->first)
                        @continue
                    @endif
                    <div class="tile is-child">
                        <a
                            href="{{ route('comic.read', ['slug' => $comic->slug, 'chap' => $comic->chapters->count() - 1]) }}">
                            <div class="hero-item">
                                <img class="cover"
                                    src="{{ $comic->slider->getFirstMediaUrl('slider', '290x191') }}"
                                    alt="cover" />
                                <div class="bottom-shadow"></div>
                                <div class="captions">
                                    <h3>{{ $comic->name }}</h3>
                                </div>
                                <div class="chapter green">Chương {{ $comic->chapters->count() - 1 }}</div>
                            </div>
                            <!-- /.hero-item -->
                        </a>
                    </div>
                    @if ($loop->index == 2)
                    @break
                @endif
                @endforeach
            </div>
            {{-- {{ dd($popular_comics) }} --}}
            {{-- {{ views($comics[0])->count() }} --}}
            {{-- {{ dd($popular_comics) }} --}}
            <div class="tile is-parent">
                <div class="tile is-child">
                    <a
                        href="{{ route('comic.read', ['slug' => $comics[0]->slug, 'chap' => $comics[0]->chapters->count() - 1]) }}">
                        <div class="hero-item has-excerpt">
                            <img class="cover"
                                src="{{ $popular_comics[0]->slider()->get()->first()->getFirstMediaUrl('slider', '583x386') }}"
                                alt="cover" />
                            <div class="bottom-shadow"></div>
                            <div class="captions">
                                <h5>Thể loại:
                                    @foreach ($popular_comics[0]->categories as $category)
                                        {{ $category->name . ',' }}
                                    @endforeach
                                </h5>
                                <h3>{{ $popular_comics[0]->name }}</h3>
                            </div>
                            <div class="chapter blue">Chương {{ $popular_comics[0]->chapters->count() - 1 }}</div>
                            <div class="excerpt">{{ $popular_comics[0]->description }}
                            </div>
                        </div>
                        <!-- /.hero-item -->
                    </a>
                </div>
            </div>
            <div class="tile is-3 is-vertical is-parent">
                @foreach ($popular_comics as $comic)
                    @if ($loop->first || $loop->index == 1 || $loop->index == 2)
                        @continue
                    @endif
                    <div class="tile is-child">
                        <a
                            href="{{ route('comic.read', ['slug' => $comic->slug, 'chap' => $comic->chapters->count() - 1]) }}">
                            <div class="hero-item">
                                <img class="cover"
                                    src="{{ $comic->slider()->get()->first()->getFirstMediaUrl('slider', '290x191') }}"
                                    alt="cover" />
                                <div class="bottom-shadow"></div>
                                <div class="captions">
                                    <h3>{{ $comic->name }}</h3>
                                </div>
                                <div class="chapter green">Chương {{ $comic->chapters->count() - 1 }}</div>
                            </div>
                            <!-- /.hero-item -->
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</section>
