<section class="main-menu">
    <div class="container">
        <nav class="navbar">
            <div class="navbar-menu">
                <div class="navbar-start">
                    <div class="top-search smp">
                        <input class="text-search" type="text" placeholder="Bạn cứ nhập từ khoá, còn lại để qq lo">
                        <button class="submit-btn btn_search"></button>
                        <div class="list-results">
                        </div>
                    </div>
                    <a href="{{ route('home') }}" class="navbar-item">Trang Chủ</a>
                    <div class="navbar-item has-dropdown is-hoverable is-mega">
                        <div class="navbar-link">Thể loại</div>
                        <div class="navbar-dropdown ">
                            <div class="container">
                                <div class="level">
                                    <div class="level-left mega-list-wrapper">
                                        <div class="columns">
                                            <!-- dau vong lap -->
                                            @php
                                                $categories = \App\Models\Category::orderBy('name')->get();
                                                $id = 0;
                                                for ($i = 0; $i <= $categories->count() / 7; $i++) {
                                                    echo '<div class="column column-menu">';
                                                    echo '<ul class="mega-list">';
                                                    for ($j = 0; $j < 7; $j++, $id++) {
                                                        if ($id >= $categories->count()) {
                                                            break;
                                                        }
                                                        echo '<li><a href="' . route('front-end.category', ['slug' => $categories[$id]->slug]) . '">' . $categories[$id]->name . '</a> </li>';
                                                    }
                                                    echo '</ul>';
                                                    echo '</div>';
                                                }
                                            @endphp
                                            <!-- het vong lap -->
                                        </div>
                                    </div>
                                    <div class="level-right pc">
                                        <img src="http://static.truyenqqpro.com/template/frontend/images/menu-icon.jpg"
                                            class="mega-menu-cover" alt="img">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable is-mega">
                        <div class="navbar-link">Sắp Xếp</div>
                        <div class="navbar-dropdown ">
                            <div class="container">
                                <div class="level">
                                    <div class="level-left mega-list-wrapper">
                                        <div class="columns">
                                            <div class="column">
                                                <ul class="mega-list">
                                                    <li><a href="{{ route('front-end.top_day') }}">Top Ngày</a></li>
                                                    <li><a href="{{ route('front-end.top_tuan') }}">Top Tuần</a></li>
                                                </ul>
                                            </div>
                                            <div class="column">
                                                <ul class="mega-list">
                                                    <li><a href="{{ route('front-end.top_thang') }}">Top Tháng</a>
                                                    </li>
                                                    <li><a href="{{ route('front-end.top_loves') }}">Yêu
                                                            Thích</a></li>
                                                </ul>
                                            </div>
                                            <div class="column">
                                                <ul class="mega-list">
                                                    <li><a href="{{ route('front-end.top_new_update') }}">Mới Cập
                                                            Nhật</a></li>
                                                    <li><a href="{{ route('front-end.new_comics') }}">Truyện
                                                            Mới</a></li>
                                                </ul>
                                            </div>
                                            <div class="column">
                                                <ul class="mega-list">
                                                    <li><a href="{{ route('front-end.comics_full') }}">Truyện
                                                            Full</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="{{ route('front-end.comics_female') }}" class="navbar-item">Con Gái</a>
                    <a href="{{ route('front-end.comics_male') }}" class="navbar-item">Con Trai</a>
                    <a href="javascript:void(0)" class="navbar-item">Tìm Truyện</a>
                    <a rel="nofollow" href="{{ route('front-end.history') }}" class="navbar-item">Lịch Sử</a>
                    <a rel="nofollow" href="{{ route('user.follow_list') }}" class="navbar-item">Theo
                        Dõi</a>
                    <a rel="nofollow" href="javascript:void(0)" class="navbar-item">Thảo Luận</a>
                    <a rel="nofollow" href="javascript:void(0)" class="navbar-item">Fanpage</a>
                    <a rel="nofollow" href="javascript:void(0)" class="navbar-item">Tuyển Nhân Sự</a>

                </div>
            </div>
        </nav>
    </div>
</section>
