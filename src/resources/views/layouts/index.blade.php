<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @include('layouts.front-end.head')
    @yield('head')
    @livewireStyles
    @livewireScripts
</head>

<body>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0">
    </script>

    <script>
        function getCookie(name) {
            var pattern = RegExp(name + "=.[^;]*")
            matched = document.cookie.match(pattern)
            if (matched) {
                var cookie = matched[0].split('=')
                return cookie[1]
            }
            return false
        }

    </script>
    <input type="hidden" id="keyword-default" value="tổng tài">
    <div class="outsite">
        @include('layouts.front-end.topbar')
        @guest
            @include('layouts.front-end.login-modal')
        @endguest
        @include('layouts.front-end.notify-modal')
        @include('layouts.front-end.main-menu')
        @yield('content')
    </div>
    {{-- footer --}}
    @include('layouts.front-end.footer')
    @include('layouts.front-end.qr-modal')
    {{-- /.qr-modal --}}
</body>

</html>
