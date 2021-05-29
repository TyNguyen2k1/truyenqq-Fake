@extends('layouts.index')
@section('content')
    <section class="main-content">
        <div class="container story-list">
            <div class="title-list">{{ $properties['properties'] . ' ' . $properties['name'] }}</div>
            @if ($properties['description'] != '')
                <div class="box">
                    {{ $properties['description'] }}
                </div>
            @endif
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-parent">
                    @if ($items == null)
                        <div class="warning-list box">Xin lỗi, không tìm thấy kết quả nào!!</div>
                    @else
                        <x-front_end.comic-item :comics="$items" />
                    @endif
                </div>
            </div>
            <!-- /.list-stories -->

            <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
                @if ($items)
                    {{ $items->links('vendor.pagination.custom') }}
                @endif
            </nav>
        </div>
    </section>
@endsection
