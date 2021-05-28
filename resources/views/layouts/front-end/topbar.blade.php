<section class="top-bar" id="home">
    <div class="container">
        <div class="level">
            <div class="level-left pc">
                <span class="logo">
                    <a href="{{ route('/') }}">Truyen QQ</a>
                </span>
                <!-- /.logo -->
                <livewire:list-results />
                <!-- /.top-search -->
            </div>
            <div class="level-right">
                <ul class="top-links pc">
                    <li>
                        <a href="{{ route('front-end.history') }}">Lịch sử</a>
                    </li>
                    <li>
                        <a href="{{ route('user.follow_list') }}">Theo dõi</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="download-app-link">
                            <span class="download-app-icon"></span>
                            Tải App
                        </a>
                    </li>
                </ul>
                <!-- /.top-links -->
                @auth
                   <livewire:notify />
                @endauth
                @guest
                    <div class="top-buttons has-login">
                        <script type="text/javascript">
                            var login = 0;
                            var user_id = 0;
                            var urlSubcribe = "http://truyenqq.com/frontend/user/regiter-subscribe";
                            var urlLike = "http://truyenqq.com/frontend/user/regiter-like";
                            // var urlLogin = "http://truyenqq.com/frontend/public/login";
                            var urlLogin = "{{ route('login') }}";
                            var urlRegister = "http://truyenqq.com/frontend/public/register";
                            var urlForgot = "http://truyenqq.com/frontend/public/forgot";

                        </script>
                        <button class="login-btn">Đăng nhập</button>
                        <button class="register-btn">Đăng ký</button>
                    </div>
                @endguest
                <!-- /.top-buttons -->
            </div>
        </div>
    </div>
</section>
