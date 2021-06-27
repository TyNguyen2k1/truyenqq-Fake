@extends('layouts.index')
@section('title')
    Danh sách tin nhắn
@endsection

@section('content')
    <section class="main-content">
        <div class="container">
            <div class="messages columns" style="height: 197px;">
                <div class="column is-narrow left pc">
                    <ul class="nav-user">
                        <li><a class="li01 " href="{{ route('user.profile') }}">Quản lý tài khoản</a></li>
                        <li><a class="li02 is-active" href="{{ route('user.messenger') }}">Tin nhắn</a></li>
                        <li><a class="li03 " href="{{ route('user.update_password') }}">Đổi mật khẩu</a></li>
                        <!--<li><a class="li04 regiter-team"href="group.html">Đăng ký nhóm dịch</a></li>
                <li><a class="li05 collection" href="collection.html">Quyên góp</a></li>-->
                        <li><a class="li05 collection" href="{{ route('user.by-credits') }}">Mua credits</a></li>

                    </ul>
                </div>
                <div class="column">
                    <div class="level title">
                        <p class="level-left has-text-weight-bold">Tin nhắn</p>
                        <p class="level-right">
                            <a href="http://truyenqq.com/gui-tin-nhan.html">
                                <i class="fas fa-paper-plane"></i> Gửi tin nhắn
                            </a>
                        </p>
                    </div>
                    <table class="table is-narrow">
                        <thead>
                            <tr>
                                <th class="col-02">Nội dung</th>
                                <th class="col-03 has-text-centered">Ngày gửi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="2" class="no-result" style="text-align: center;">Không Có Tin Nhắn Nào!</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
@endsection
