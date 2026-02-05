<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index() {

        $user = User::where('id', auth()->id())->first();
        $bids = Bid::where('user_id', auth()->id())->count();

        return Inertia::render('Profile', [
            'user' => $user,
            'bids' => $bids
        ]);
    }

    public function bids() {
        $bidsWithInstitutions = Bid::with('institution')->where('user_id', auth()->id())->get();

        return Inertia::render('ProfilePages/MyBids', [
            'bids' => $bidsWithInstitutions
        ]);
    }
}
