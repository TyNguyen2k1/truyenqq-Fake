<li class="li02"><a href="javascript:void(0);" class="button is-danger is-rounded btn-subscribe" id="subscribeComic"
        @auth wire:click="$emit('follow')" @endauth><span class=" {{ $isFollow ? 'far' : 'fas' }} fa-heart"></span>
        {{ $isFollow ? 'Hủy theo dõi' : ' Theo dõi' }}
    </a></li>

@guest
    <script>
        // window.livewire.on('follow', () => {
        //     alert('Ban chua login');
        // })
        document.getElementById('subscribeComic').onclick = function() {
            alert('Vui lòng đăng nhập để theo dõi truyện !!!');
        }

    </script>
@endguest
