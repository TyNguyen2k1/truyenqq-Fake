@foreach ($comments as $comment)
    <article class="info-comment {{ $comment->comment_id == null ? 'comment-main-level' : 'reply-list' }} " id="comment_{{ $comment->id }}">
        <div class="outsite-comment comment-main-level">
            <figure class="avartar-comment">
                @if (App\Models\User::find($comment->user_id))
                    <img src="{{ $comment->user->profile_photo_url }}" alt="Nova">
                @else
                    <img src="{{ asset('storage/frontend/images/noavatar.png') }}" alt="Nova">
                @endif
            </figure>
            <div class="item-comment">
                <div class="outline-content-comment">
                    <div>
                        <strong>{{ $comment->name }}</strong>
                        @if (App\Models\User::find($comment->user_id))
                            <span class="title-user-comment title-member">Thành
                                Viên</span>
                        @else
                            <span class="title-user-comment title-hidden">Ẩn
                                Danh</span>
                        @endif
                        <span class="time">{{ $comment->created_at->diffForHumans() }}</span>
                    </div>
                    <div class="content-comment">
                       {!! $comment->body !!}
                    </div>
                </div>
                <div class="action-comment">
                    <span wire:click='like({{ $comment->id }})' class="like-comment"><i class="fas fa-thumbs-up"></i>
                        <span class="total-like-comment">{{ $comment->likes }}</span></span>
                    <span wire:click='addReply({{ $comment->id }})' class="reply-comment"><i
                            class="far fa-comment"></i>
                        Trả lời</span>
                </div>
            </div>
        </div>
    </article>
    @include('layouts.partials.comment', ['comments' => $comment->childrenComments])
@endforeach
