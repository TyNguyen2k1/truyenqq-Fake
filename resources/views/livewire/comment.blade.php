<div class="comment-container" id="form_comment">
    <span class="story-detail-title"><i class="fas fa-comments"></i>Bình Luận (<span
            class="comment-count">{{ $all_comments_count }}</span>)</span>
    <div class="group01 comments-container">
        <div class="form-comment main_comment">
            <div class="message-content">
                @if ($commentReplyingTo)
                    <div><span>Đang trả lời: {{ $commentReplyingTo->name }} <i wire:click="removeReply"
                                class="far fa-times-circle"></i></span></div>
                @endif
                <form wire:submit.prevent='submit' method="POST">
                    <div class="input-comment">

                        <span class="col-md-6 col-sm-6 col-xs-12 text-center"><input wire:model.lazy='name' value=""
                                class="input" id="name_comment" type="text" placeholder="Họ tên"></span>
                        <span class="col-md-6 col-sm-6 col-xs-12 text-center"><input wire:model.lazy='email' value=""
                                class="input" id="email_comment" type="email" placeholder="Email"></span>

                    </div>
                    <div class="mess-input">
                        <textarea wire:model.lazy='comment' class="textarea" name="comment"
                            placeholder="Nội dung bình luận" id="content_comment" style="white-space: pre-wrap;"></textarea>
                        <button type="submit" class="submit_comment"></button>
                    </div>
                </form>
            </div>
        </div>
        <div class="list-comment">
            @include('layouts.partials.comment')
        </div>
    </div>
    @if ($all_comments_count >= 10 && $amount < $all_comments_count )
        <div wire:loading.remove wire:click='loadMore' class="load-more load_more_comment"><a class="button is-info">Xem thêm nhiều bình
                luận</a>
        </div>
        <div wire:loading.flex class="load-more load_more_comment"><a class="button is-info">Đang tải thêm bình luận ...</a>
    </div>
    @endif

</div>
