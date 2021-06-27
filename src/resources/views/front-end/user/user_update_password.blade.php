@extends('layouts.index')
@section('title')
    Thay đổi mật khẩu
@endsection
@section('content')
    <section class="main-content">
        <div class="container">
            <div class="messages columns" style="height: 493px;">
                <div class="column is-narrow left pc">
                    <ul class="nav-user">
                        <li><a class="li01 " href="{{ route('user.profile') }}">Quản lý tài khoản</a></li>
                        <li><a class="li02 " href="{{ route('user.messenger') }}">Tin nhắn</a></li>
                        <li><a class="li03 is-active" href="{{ route('user.update_password') }}">Đổi mật khẩu</a></li>
                        <!--<li><a class="li04 regiter-team"href="group.html">Đăng ký nhóm dịch</a></li>
                <li><a class="li05 collection" href="collection.html">Quyên góp</a></li>-->
                        <li><a class="li05 collection" href="{{ route('user.by-credits') }}">Mua credits</a></li>

                    </ul>
                </div>
                <div class="column">
                    <div class="level title">
                        <p class="level-left has-text-weight-bold">Đổi mật khẩu</p>
                    </div>
                    <form method="post" action="{{ route('user-password.update') }}">
                        @csrf
                        @method("PUT")
                        @if (session('status'))
                            <script>
                                alert('Cập nhật thành công !!!')
                            </script>
                        @endif

                        @if ($errors->any())
                            <script>
                                alert('Có lỗi đb nào đó, vui lòng kiểm tra lại !!!')
                            </script>
                        @endif
                        <div class="form-change-pass">
                            <div class="field">
                                <p class="txt">Mật khẩu hiện tại</p>
                                <p class="control">
                                    <input class="input" type="password" value="" name="current_password"
                                        id="current_password">
                                </p>
                            </div>
                            @error('current_password')
                                @dump($message);
                            @enderror
                            <div class="field">
                                <p class="txt">Mật khẩu mới</p>
                                <p class="control">
                                    <input class="input" type="password" value="" name="password" id="password">
                                </p>
                            </div>
                            @error('password')
                                @dump($message);
                            @enderror
                            <div class="field">
                                <p class="txt">Xác nhận mật khẩu</p>
                                <p class="control">
                                    <input class="input" type="password" value="" name="password_confirmation"
                                        id="password_confirmation">
                                </p>
                            </div>
                            @error('password_confirmation')
                                @dump($message);
                            @enderror
                            <div class="field">
                                <p class="control">
                                    <button class="button is-danger">Đổi mật khẩu</button>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection
