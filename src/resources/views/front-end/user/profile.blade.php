@extends('layouts.index')
@section('head')
    <style>
        input[type="file"] {
            display: none;
        }

        #image-avatar {
            width: 64px;
            height: 64px;
        }

        .custom-file-upload {
            border: 1px solid #ccc;
            display: inline-block;
            padding: 6px 12px;
            cursor: pointer;
        }

    </style>
@endsection
@section('title')
    Sửa thông tin cá nhân
@endsection
@section('content')
    <title>Sửa Thông Tin Cá Nhân</title>
    <section class="main-content">
        <div class="container">
            <div class="messages columns">
                <div class="column is-narrow left pc">
                    <ul class="nav-user">
                        <li><a class="li01 is-active" href="http://truyenqq.com/quan-ly-tai-khoan.html">Quản lý tài
                                khoản</a></li>
                        <li><a class="li02 " href="{{ route('user.messenger') }}">Tin nhắn</a></li>
                        <li><a class="li03 " href="{{ route('user.update_password') }}">Đổi mật khẩu</a></li>
                        {{-- <li><a class="li04 regiter-team"href="group.html">Đăng ký nhóm dịch</a></li> --}}
                        <li><a class="li05 collection" href="{{ route('user.by-credits') }}">Mua credits</a></li>
                    </ul>
                </div>
                <div class="column">
                    {{-- <div class="user-right column">
                    </div> --}}
                    <div class="user-main column">
                        <div class="level title">
                            <p class="level-left has-text-weight-bold">Thông tin tài khoản</p>
                        </div>
                        <form method="post" action="{{ route('user-profile-information.update') }}"
                            enctype="multipart/form-data">
                            {{-- <form method="post" action="{{ route('user.update') }}" enctype="multipart/form-data"> --}}
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
                                    <p class="txt">UID:</p>
                                    <p class="control">
                                        <input class="input" type="text" value="{{ auth()->id() }}" disabled>
                                    </p>
                                </div>
                                <div class="field">
                                    <p class="txt">Email:</p>
                                    <p class="control">
                                        <input class="input" type="email" name="email"
                                            value="{{ auth()->user()->email }}">
                                    </p>
                                </div>
                            </div>
                            <div class="level title user-title">
                                <p class="level-left has-text-weight-bold">Thông tin cá nhân</p>
                            </div>
                            <div class="form-change-pass user-form">
                                <div class="field">
                                    <p class="txt">Họ Tên</p>
                                    <p class="control">
                                        <input class="input" type="text" id="name" name="name"
                                            value="{{ Auth::user()->name }}">
                                        @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </p>
                                </div>
                                {{-- <div class="field">
                            <p class="txt">Mật khẩu hiện tại:</p>
                            <p class="control">
                                <input class="input" id="password_old" name="password_old" type="password" value="">
                            </p>
                        </div> --}}
                                {{-- <input type="hidden" id="avatar" name="avatar" value=""> --}}
                                {{-- <input type="hidden" id="inputDelImage" name="inputDelImage" value=""> --}}

                                {{-- <label for="file-upload" class="custom-file-upload button is-danger">
                            <i class="fa fa-cloud-upload"></i> Custom Upload
                        </label> --}}
                                <input id="uploadavatar" type="file" name="photo" onchange="loadFile(event)" />
                                <div class="img"><img id="image-avatar" class="image-avatar"
                                        src="{{ Auth::user()->profile_photo_url }}" alt="" /></div>
                                {{-- <input type="file" name="files[]" id="uploadavatar" style="display: none;"> --}}
                                <button type="button" class="button is-danger btn-avatar">Chọn hình</button>
                                <div class="field">
                                    <p class="control">
                                        <button class="button is-danger" type="submit">Lưu</button>
                                    </p>
                                </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </section>

    <script type="text/javascript" src="http://static.truyenqq.com/template/frontend/scripts/jquery.ui.widget.js"></script>
    <script type="text/javascript" src="http://static.truyenqq.com/template/frontend/scripts/jquery.fileupload.js"></script>
    <script type="text/javascript" src="http://static.truyenqq.com/template/frontend/scripts/jquery.iframe-transport.js">
    </script>
    <script>
        $('.btn-avatar').click(function() {
            $('#uploadavatar').trigger('click');
        });
        var loadFile = function(event) {
            var output = document.getElementById('image-avatar');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function() {
                URL.revokeObjectURL(output.src) // free memory
            }
        };
    </script>
@endsection
