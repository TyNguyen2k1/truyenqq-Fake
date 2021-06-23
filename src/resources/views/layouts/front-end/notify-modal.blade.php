<div class="modal notify-modal {{ $forgotPassword ?? '' }}">
    <div class="modal-background"></div>
    <div class="modal-content">
        <span class="top-caption">
            Quên mật khẩu hử !<br />
            Đã có QQ lo
        </span>
        <!-- /.top-caption -->
        <div class="forget-password-section @if (session()->has('status')) hidden @endif">
            <span class="caption">Mật khẩu khôi phục sẽ được gởi qua email mà bạn đăng ký</span>
            <form method="POST" action="{{ route('password.email') }}">
                @csrf
                <div class="form-forgot">
                    <input required type="email" placeholder="Email" id="email" name="email"
                        value="{{ old('email') }}" />
                    <button type="submit" id="button-forgot">Gửi mật khẩu</button>
                    @if (session()->has('test')) {{ dd(session('test')) }}
                    @endif
                </div>
            </form>
            {{-- <div class="form-forgot">
                <input type="email" placeholder="Email" id="email-forgot">
                <div class="login-captcha">
                    <input type="text" class="form-control" id="captcha_forgot" name="captcha_forgot"
                        placeholder="Mã xác nhận">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAyBAMAAAA5A0HPAAAAIVBMVEX///+Aw/FgtO6g0vRBpeohlue/4fjf8PsCiOT///////89pZZaAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAThJREFUSIntUb9Pg1AQPhCho7aLozQdGCGa2NFEVMamMfGNVGPL2MWGsdBS7s/2veMevHbRoYsJ33DHfffdrwdAjx7/Cd4yGsap+soR8SD991s8vk4NiT9aSTuVaQxNYaaYK5LYtTSuDKsn+Ir9UUB0PuMZm8+7hEqjYKviaCKwoJRYm8KOEagpZ6esu4cToVWSG4pHJqaUs3enwrzm/C1vI+i4wbbJYvXCwmZpgBv2dmnW5fp8cCtd0MSQNcOSlPlNMjNW7zI8ua2Xb30wVpfAo8l20Qq5leARHrfI3skN6lZ4SR2tPYf8bp4IzVvonrqzEhelObm9xV+5gmoCXWkV5mS9CCTy36s/5+G6IRb3vHJolgF8PFf0vo4mAsS5mswrO69wDI8bwmIilMZ9gN+x/IOmR4+z4wcT2UhWVlnM5AAAAABJRU5ErkJggg=="
                        alt="Mã Xác Nhận">
                    <span class="refresh-captcha" data-type="forgot"><i class="fas fa-sync-alt"></i></span>
                    <input type="hidden" name="captcha-register" id="captcha-forgot"
                        value="Qf0d327a787630770d448c79da5a97cd1">
                </div>
                <button type="submit" id="button-forgot">Gửi mật khẩu</button>
            </div> --}}
        </div>
        <!-- /.forget-password-section -->
        <div class="sent-password-section @if (isset($forgotPassword)) hidden @endif">
            <span class="check-icon"></span>
            <span class="caption">{{ session('status') }}</span>
        </div>
        <!-- /.sent-password-section -->
        <a href="javascript:void(0);" class="back-to-login">Tôi muốn quay lại đăng nhập</a>
        <!-- /.back-to-login -->
    </div>
</div>
