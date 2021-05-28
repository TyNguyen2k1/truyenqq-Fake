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
