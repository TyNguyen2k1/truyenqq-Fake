<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Chapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Actions\Fortify\UpdateUserProfileInformation;


class UserController extends Controller
{
    public function buy(Request $request)
    {
        $user = User::findOrFail($request->get('userID'));
        $chapter = Chapter::findOrFail($request->get('chapterID'));
        if ($user->haveMoney($request->get('chapterPrice'))) {
            $user->wallet->update(['credits' => $user->wallet->credits - $chapter->price]);
            $user->chapters()->attach($chapter->id);
        } else {
            return response()->json(['error' => 'Bạn không đủ cc vui lòng mua thêm !']);
        }
        return response()->json(['success' => 'Mua thành công !']);
    }

    public function buy_credits(Request $request)
    {
        auth()->user()->wallet->update([
            'credits' => DB::raw('credits+100')
        ]);
        return response()->json(['success' => 'Mua thành công !']);
    }
}
