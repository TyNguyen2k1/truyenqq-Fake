@extends('layouts.index')
@section('head')
    <style>
        .list-price li{
            text-align: left;
            padding: 7px 0;
        }
    </style>
@endsection
@section('title')
    Thay đổi mật khẩu
@endsection
@section('content')
    <section class="main-content">
        <div class="container">
            <div class="messages columns">
                <div class="column is-narrow left pc">
                    <ul class="nav-user">
                        <li><a class="li01" href="http://truyenqq.com/quan-ly-tai-khoan.html">Quản lý tài
                                khoản</a></li>
                        <li><a class="li02 " href="{{ route('user.messenger') }}">Tin nhắn</a></li>
                        <li><a class="li03 " href="{{ route('user.update_password') }}">Đổi mật khẩu</a></li>
                        {{-- <li><a class="li04 regiter-team"href="group.html">Đăng ký nhóm dịch</a></li> --}}
                        <li><a class="li05 collection  is-active" href="{{ route('user.by-credits') }}">Mua credits</a>
                        </li>
                    </ul>
                </div>
                <div class="column columns">
                    <div class="user-right column">
                        <div class="level title">
                            <p class="level-left has-text-weight-bold">Bảng giá</p>
                        </div>
                        <div class="form-change-pass">
                            <ul class="list-price">
                                <li>20.000đ = 200cc</li>
                                <li>50.000đ = 500cc</li>
                                <li>100.000đ = 1.000cc</li>
                                <li>200.000đ = 2.000cc</li>
                                <li>500.000đ = 5.000cc</li>
                            </ul>
                        </div>

                    </div>
                    <div class="user-main column">
                        <div class="level title">
                            <p class="level-left has-text-weight-bold">Thông tin tài khoản</p>
                        </div>
                        {{-- <form method="post" action="{{ route('user.buy-credits-submit') }}"> --}}
                            {{-- @csrf --}}
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
                                    <p class="txt">Chọn loại thẻ</p>
                                    <p class="control">
                                        <select id="myselect" class="input" required>
                                            <option value="1">Thẻ Viettel</option>
                                            <option value="2">Thẻ VTC</option>
                                            <option value="3">Thẻ Garena</option>
                                            <option value="4">Thẻ Zing</option>
                                        </select>
                                    </p>
                                </div>
                                @error('current_password')
                                    @dump($message);
                                @enderror
                                <div class="field">
                                    <p class="txt">Nhập seri</p>
                                    <p class="control">
                                        <input class="input" type="number" value="" name="seri" required>
                                    </p>
                                </div>
                                @error('password')
                                    @dump($message);
                                @enderror
                                <div class="field">
                                    <p class="txt">Nhập mã thẻ</p>
                                    <p class="control">
                                        <input class="input" type="number" value="" name="code" required>
                                    </p>
                                </div>
                                @error('password')
                                    @dump($message);
                                @enderror
                                <div class="field">
                                    <p class="control">
                                        <button type="submit" id="btn_by_credits" class="button is-danger">Mua</button>
                                    </p>
                                </div>
                            </div>
                        {{-- </form> --}}
                    </div>

                </div>
            </div>
        </div>
    </section>
@endsection
