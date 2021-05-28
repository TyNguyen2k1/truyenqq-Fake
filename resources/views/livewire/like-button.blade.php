<li @auth wire:click="like({{ $comic->id }})" @endauth class="li03"><a href="javascript:void(0);"
        class="button is-danger is-rounded btn-like" id="liked"><span class="fas fa-thumbs-up"></span>Thích</a></li>
@guest
    <script>
        document.getElementById('liked').onclick = function() {
            alert('Vui lòng đăng nhập để thích truyện !!!');
        }

    </script>
@endguest
@if (session('liked'))
    <script>
        document.getElementById('liked').onclick = function() {
            alert('Bạn đã like truyện này rồi !!!');
        }

    </script>
@endif
