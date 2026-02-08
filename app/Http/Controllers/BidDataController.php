<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BidDataController extends Controller
{
    public function show($id) {
        $bid = Bid::with('institution')->where('id', $id)
            ->where('user_id', auth()->id())
            ->firstOrFail();

        $user = User::where('id', auth()->id())->first();


        return Inertia::render('ProfilePages/FillBid',
            [
             'user' => $user,
             'bid' => $bid
            ]);
    }

    public function store() {

    }
}
