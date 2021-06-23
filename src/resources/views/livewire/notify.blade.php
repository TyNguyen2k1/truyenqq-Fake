@php
$notifications = auth()
    ->user()
    ->notifications->sortBy('read_at');
@endphp
<div class="top-buttons has-login">
    <div class="notify home smp"><a href="{{ route('home') }}"><i class="fas fa-home"></i></a></div>
    <div class="notify center {{ auth()->user()->unreadNotifications->count() > 0 ? 'unread' : '' }} " data-id="1">
        <i class="fas fa-bell"></i>
        <div class="list-messages">
            <div class="title-message">Thông báo</div>
            <ul>
                @forelse ($notifications as $notification )
                    <li wire:click="markAsRead('{{ $notification['id'] }}')" class="message @if (!$notification->read_at) unread @endif">
                        <a>
                            <div class="title-message-item">Thông Báo</div>
                            <div class="content-message-item">{{ $notification->data['name'] }} vừa
                                trả lời
                                bình luận của bạn.
                            </div>
                            <p class="time"><i class="far fa-clock"></i>{{ $notification->created_at }}
                            </p>
                        </a>
                    </li>
                @empty
                    <li class="no-result" style="padding: 10px">Không Có Thông Báo Nào!</li>
                @endforelse
                <input id="id_notification" type="hidden" value="1" data-totalnotification="0">
            </ul>

        </div>
    </div>
    <div class="notify center ">
        <i class="fas fa-envelope"></i>
        <div class="list-messages">
            <div class="title-message">Tin nhắn</div>
            <ul>
                <li class="no-result" style="padding: 10px">Không Có Tin Nhắn Nào!</li>
            </ul>
        </div>
    </div>
    <div class="notify center btn-search smp" for="focus-input"><i class="fas fa-search"></i></div>
    <div class="notify user center">
        @if (Laravel\Jetstream\Jetstream::managesProfilePhotos())
            <div x-data="{photoName: null, photoPreview: null}" class="col-span-6 sm:col-span-4">
                <!-- Current Profile Photo -->
                <span class="avatar-menu"><img src="{{ auth()->user()->profile_photo_url }}"></span>
                <!-- New Profile Photo Preview -->
            </div>
        @endif
        <div class="notify btn-user smp"><i class="fas fa-user-circle"></i></div>
        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <ul class="user-links">
                <li>
                    <a href="{{ route('user.profile') }}"><i class="fas fa-user-circle"></i>
                        Quản lý tài khoản</a>
                </li>
                <li>
                    <a href="{{ route('user.follow_list') }}"><i class="fas fa-heart"></i>
                        Truyện đang theo dõi</a>
                    {{-- </li>
                <li>
                    <a href="http://truyenqq.com/lich-su.html"><i class="fas fa-history"></i> Lịch sử
                        đọc
                        truyện</a>
                </li>

                <li>
                    <a href="http://truyenqq.com/tin-nhan.html"><i class="fas fa-envelope"></i> Tin
                        nhắn</a>
                </li>
                <li>
                    <a href="http://truyenqq.com/doi-mat-khau.html"><i class="fas fa-lock"></i> Đổi mật
                        khẩu</a>
                </li> --}}
                    <!--<li> <a href="http://truyenqq.com/dang-ky-nhom-dich.html"><i class="fas fa-clipboard-list"></i> Đăng ký nhóm dịch</a> </li>-->
                <li>

                    <a href="{{ route('logout') }}"
                        onclick="event.preventDefault(); this.closest('form').submit();"><i
                            class="fas fa-sign-out-alt"></i> Đăng xuất</a>
                </li>
            </ul>
        </form>
    </div>
    <div class="head_menu smp"><span>&nbsp;</span></div>
</div>
