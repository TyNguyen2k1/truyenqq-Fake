<div class="modal login-modal {{ $login ?? '' }} {{ $register ?? '' }}">
    <div class="modal-background"></div>
    <div class="modal-content">
        <span class="top-caption">
            Dù ai di ngược về xuôi,<br />
            đến giờ đọc truyện cứ vào QQ
        </span>
        <div>
            <!-- /.top-caption -->
            <div class="tabs-buttons">
                <button data-type="login" class="{{ $login ?? '' }}">Đăng nhập</button>
                <button data-type="register" class="{{ $register ?? '' }}">Đăng ký</button>
            </div>
            <!-- /.tabs-button -->
            <div class="tabs-contents">

                <div class="login-section {{ $login ?? '' }}">
                    <div class="form-login ">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf
                            <input type="email" placeholder="Email" name="email" id="email" />
                            <input type="password" placeholder="Mật khẩu" id="password" name="password">
                            <button type="submit" class="button_login btn btn-lg">Đăng
                                nhập</button>
                            <a href="javascript:void(0);" class="forget-password-link">Quên mật khẩu</a>
                        </form>
                    </div>
                </div>

                <!-- /.login-section -->
                <div class="register-section {{ $register ?? '' }}">
                    <div class="form-login">
                        <form method="POST" action="{{ route('register') }}">
                            @csrf
                            <input type="text" placeholder="Tên" id="name" name="name" required />
                            <input type="email" placeholder="Email" id="email" name="email" required />
                            <input type="password" placeholder="Mật khẩu" id="password" name="password" required />
                            <input type="password" placeholder="Nhập lại mật khẩu" id="password_confirmation"
                                name="password_confirmation" required />
                            {{-- <div class="login-captcha">
                                <input type="text" class="form-control" id="captcha_register" name="captcha_register"
                                    placeholder="Mã xác nhận" />
                                <img src="http://static.truyenqq.com/template/frontend/images/logo.png"
                                    alt="Mã Xác Nhận" />
                                <span class="refresh-captcha" data-type="register"><i
                                        class="fas fa-sync-alt"></i></span>
                                <input type="hidden" name="captcha-register" id="captcha-register" value="" />
                            </div> --}}

                            <button type="submit" id="">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- /.register-section -->
        </div>
        <!-- /.tabs-contents -->
    </div>
</div>
