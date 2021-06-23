<div class="modal login-modal">
    <div class="modal-background"></div>
    <div class="modal-content">
        <span class="top-caption">
            Dù ai di ngược về xuôi,<br />
            đến giờ đọc truyện cứ vào QQ
        </span>
        <div>
            <!-- /.top-caption -->
            <div class="tabs-buttons">
                <button data-type="login">Đăng nhập</button>
                <button data-type="register">Đăng ký</button>
            </div>
            <!-- /.tabs-button -->
            <div class="tabs-contents">

                <div class="login-section">
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
                    {{-- <div class="form-login">
                        <input type="email" placeholder="Email" id="email_login">
                        <input type="password" placeholder="Mật khẩu" id="password_login">
                        <button type="submit" class="button_login btn btn-lg">Đăng nhập</button>
                        <a href="javascript:void(0);" class="forget-password-link">Quên mật khẩu</a>
                    </div> --}}
                </div>

                <!-- /.login-section -->
                <div class="register-section">
                    <div class="form-login">
                        <form method="POST" action="{{ route('register') }}">
                            @csrf
                            <input type="text" placeholder="Tên" id="name" name="name" required />
                            <input type="email" placeholder="Email" id="email" name="email" required />
                            <input type="password" placeholder="Mật khẩu" id="password" name="password" required />
                            <input type="password" placeholder="Nhập lại mật khẩu" id="password_confirmation"
                                name="password_confirmation" required />
                            <button type="submit" id="">Đăng ký</button>
                        </form>
                    </div>
                    {{-- <div class="form-login">
                        <input type="email" placeholder="Email" id="email_register">
                        <input type="password" placeholder="Mật khẩu" id="password_register">
                        <div class="login-captcha">
                            <input type="text" class="form-control" id="captcha_register" name="captcha_register"
                                placeholder="Mã xác nhận">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAyBAMAAAA5A0HPAAAAIVBMVEX///9gtO6Aw/Hf8Pu/4fghludBpeqg0vQCiOT////////Cm4rMAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAWtJREFUSIntkktPwkAQx7fdUjgSfPXYKCpHUWM4EsWkRxMS3SOSiBwbTbBHXlvmYzuPLSnG6E0vnQRmO//fPHZapSqr7G9N/6LPTJ+xU/iZuwFgMIH8wlUes2ud37EPjtvszRPrGvaL1O6CdQCwr3iIAJro/FxUb1lw98BH/XZo6ORDK6LM2krk3kMBJrDNCTcIrLF4CUia28t3t2CGYmOO4+F0yWg2SSl2cvaYiuxvihTaRw2fLFWaANCY2QvAwo1bgB4F6hD7S57o6BawVGbbl5DuggmPldlpTDPiZTojCXaaOyB3VvW8Y8k3EOzN5ScVlLcudcZL6IgC4Vog3EIBhg5MhvQ/TWXX/kIA8tmoDGrDI2N/TXvUEGsTsw9EUeGq1FlhkBeOlzKWPRi3HveypLOKhipkoW5gT7yNWTkw+diVIuvBs5FM3XfbcF9ZJG/Ac1+LnoJ1xBe7uh4M0AXv7jn4+J6rrLJ/s0/4YldN7rUl3wAAAABJRU5ErkJggg=="
                                alt="Mã Xác Nhận">
                            <span class="refresh-captcha" data-type="register"><i class="fas fa-sync-alt"></i></span>
                            <input type="hidden" name="captcha-register" id="captcha-register"
                                value="Q6a6a5646751ee5eb783a784ccdbd6517">
                        </div>
                        <button type="submit" id="button_register">Đăng ký</button>
                    </div> --}}
                </div>
            </div>
            <!-- /.register-section -->
        </div>
        <!-- /.tabs-contents -->
    </div>
</div>
