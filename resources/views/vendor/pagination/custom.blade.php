@if ($paginator->hasPages())
    <ul class="pagination-list">
        @if (!$paginator->onFirstPage())
            <li><a class="pagination-previous" href="{{ $paginator->url(1) }}"><span aria-hidden="true">«</span></a>
            </li>
            <li><a class="pagination-link" href="{{ $paginator->previousPageUrl() }}"><span
                        aria-hidden="true">‹</span></a></li>
        @endif

        @foreach ($elements as $element)
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <li><a class="pagination-link is-current" href="javascript:void(0)">{{ $page }}</a></li>
                    @else
                        <li><a class="pagination-link" href="{{ $url }}">{{ $page }}</a></li>
                    @endif
                @endforeach
            @endif
        @endforeach

        @if ($paginator->hasMorePages())
            <li><a class="pagination-link" href="{{ $paginator->nextPageUrl() }}"><span
                        aria-hidden="true">›</span></a></li>
            <li><a class="pagination-next" href="{{ $paginator->url($paginator->count() - 2) }}"><span
                        aria-hidden="true">»</span></a></li>
        @endif
    </ul>
@endif
