{{-- Main content --}}
<section class="content mt-4">
    {{-- Default box --}}
    <div class="d-flex justify-content-between mb-2">
        <a href="{{ route('admin.comic.create') }}">
            <button class="btn btn-primary"> <i class="fa fa-plus-circle" aria-hidden="true"></i> Thêm Mới Truyện
            </button>
        </a>
    </div>

    {{-- Modal delete --}}
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true" wire:ignore.self>
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="mb-0 text-lg leading-normal">Xóa</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h4>Bạn có chắc chắn muốn xóa không ?</h4>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button wire:click.prevent="deleteComic" type="button" class="btn btn-danger">Xóa</button>
                </div>

            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Comics</h3>

            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        {{-- Large modal --}}

        <div wire:ignore.self class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
            aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div wire:loading.remove class="modal-body">
                        @if ($comicDetail)
                            <div wire:loading.remove class="row">
                                <div class="col-sm-auto mb-3 mb-sm-0">
                                    <div class="book shadow rounded mx-auto">
                                        <img class="lazy-load mx-auto"
                                            src="{{ $comicDetail->getFirstMediaUrl('comic', '190x247') }}"
                                            alt="{{ $comicDetail->name }}">
                                    </div>
                                </div>
                                <div class="info col-sm">
                                    <h1 class="name font-15x font-bold">{{ $comicDetail->name }}</h1>
                                    <time class="time_small">[Cập nhật lúc: {{ $comicDetail->updated_at }}]</time>
                                    <div class="meta-data mb-3">
                                        <div class="chapter_new mb-3">
                                            <span class="strong">Chapter mới nhất: <a target="_blank"
                                                    class="btn btn-outline-warning mr-2 mb-1" href="#">Chương
                                                    {{ $comicDetail->chapters()->count() - 1 }}</a></span>
                                        </div>
                                        <div class="author mb-3">
                                            <span class="strong">Tác giả: </span>
                                            <a rel="nofollow" href="#">{{ $comicDetail->author->name }}</a>
                                        </div>
                                        <div class="status mb-3">
                                            <span class="strong">Tình trạng: </span>
                                            @if ($comicDetail->status)
                                                Hoàn Thành
                                            @else
                                                Đang Cập Nhật
                                            @endif
                                        </div>
                                        <div class="new-chap mb-3">
                                            <span class="strong">Số chương: </span>
                                            {{ $comicDetail->chaptersAll()->count() }}
                                        </div>
                                        <div class="view-times mb-2">
                                            <span class="strong">Lượt xem: </span>
                                            {{ views($comicDetail)->count() }}
                                        </div>
                                        <div class="genre mb-3">
                                            @foreach ($comicDetail->categories as $category)
                                                <a class="btn btn-outline-warning mr-2 mb-1"
                                                    href="javascript:void(0)">{{ $category->name }}</a>
                                            @endforeach

                                        </div>
                                    </div>
                                    <div class="comic-description lh-16 long-desc">
                                        <div class="inner border-bottom mb-1">
                                            {{ $comicDetail->description }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endif
                    </div>
                    <div wire:loading.delay class="col-12">
                        <x-admin.load-awesome />
                    </div>
                </div>
            </div>
        </div>

        {{-- Large modal end --}}

        {{-- body --}}
        <div class="card-body p-0">
            <table class="table table-striped projects">
                <thead>
                    <tr>
                        <th style="width: 1%">
                            #
                        </th>
                        <th style="width: 20%">
                            Tên truyện
                        </th>
                        <th style="width: 20%">
                            Thumbnail
                        </th>
                        <th style="width: 12%">
                            Số lượng chapter
                        </th>
                        <th style="width: 12%" class="text-center">
                            Trạng thái
                        </th>
                        <th style="width: 20%">
                        </th>
                    </tr>
                </thead>
                @forelse ($comics as $comic)
                    <tbody>
                        <tr>
                            <td>
                                {{ $comic->id }}
                            </td>
                            <td>
                                <a>
                                    {{ $comic->name }}
                                </a>
                                <br />
                                <small>
                                    Created {{ $comic->created_at }}
                                </small>
                            </td>
                            <td class="">
                                <img src="{{ $comic->getFirstMediaUrl('comic', '190x247') }}"
                                    class="product-image-thumb">
                            </td>
                            <td class="project-state">
                                <a class="text-center">
                                    {{ $comic->chaptersAll()->count() }}
                                </a>
                            </td>
                            <td class="project-state">
                                @if ($comic->status)
                                    <span class="badge badge-success">Hoàn thành</span>
                                @else
                                    <span class="badge badge-info">Chưa hoàn thành</span>

                                @endif
                            </td>
                            <td class="project-actions text-right">
                                <a wire:click.prevent="viewComic({{ $comic->id }})" class="btn btn-primary btn-sm"
                                    data-toggle="modal" data-target=".bd-example-modal-lg" href="#">
                                    <i class="fas fa-folder">
                                    </i>
                                    View
                                </a>
                                <a class="btn btn-info btn-sm" href="#">
                                    <i class="fas fa-pencil-alt">
                                    </i>
                                    Edit
                                </a>
                                <a wire:click.prevent="viewComic({{ $comic->id }})"
                                    class="btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteModal"
                                    href="#">
                                    <i class="fas fa-trash">
                                    </i>
                                    Delete
                                </a>
                            </td>
                    </tbody>
                @empty
                    <tr class="text-center">
                        <td colspan="5">
                            Không Có Kết Quả!
                        </td>
                    </tr>
                @endforelse
            </table>
            <div class="row">
                <div class="ml-2">
                    {{-- {{ $comics->links('pagination::bootstrap-4') }} --}}
                    {{ $comics->links() }}
                </div>
            </div>
        </div>
        {{-- /.card-body --}}

    </div>

    {{-- /.card --}}

</section>
