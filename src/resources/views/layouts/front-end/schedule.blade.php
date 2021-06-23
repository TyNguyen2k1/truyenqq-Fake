<section class="schedule">
    <div class="container">
        <div class="schedule-inner">
            <div class="time">
                Lịch Ra Truyện Ngày {{ now()->format('d-m-Y') }} </div>
            <!-- /.time -->
            <ul class="schedule-list">
                @foreach ($list_chapter_publishers as $chapter)
                    <li><a href="{{ route('comic.detail', [ 'slug' => $chapter->comic->slug]) }}"><strong
                                class="hot">[{{ $chapter->published_date->format('H:i') }}]</strong>
                            {{ $chapter->comic->name . ' - Chương ' . $chapter->comic->chapters->count() }} </a></li>
                @endforeach
                {{-- <li><a href="http://truyenqq.com/truyen-tranh/cuc-gach-xong-vao-di-gioi-10678.html"><strong
                            class="hot">[14:00]</strong> Cục Gạch Xông Vào Dị Giới - Chương 45</a></li>
                <li><a href="http://truyenqq.com/truyen-tranh/baki-dou-2018-6321.html"><strong
                            class="hot">[15:00]</strong> Baki Dou (2018) - Chương 48</a></li>
                <li><a href="http://truyenqq.com/truyen-tranh/sieu-nang-phan-hoa-11174.html"><strong
                            class="hot">[16:00]</strong> Siêu Năng Phân Hóa - Chương 4</a></li>
                <li><a href="http://truyenqq.com/truyen-tranh/nghich-thien-chien-ky-10736.html"><strong
                            class="hot">[17:00]</strong> Nghịch Thiên Chiến Kỷ - Chương 31</a></li> --}}
            </ul>
            <!-- /.schedule-list -->
        </div>
        <!-- /.schedule-inner -->
    </div>
</section>
