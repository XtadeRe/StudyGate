<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Bid;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManagerController extends Controller
{
    public function index() {

        $bids = Bid::orderBy('created_at', 'desc')->get();

        return Inertia::render('Manager/Index', [
            'bids' => $bids
        ]);
    }

    public function profile() {

        $user = User::where('id', auth()->id())->first();
        $bids = Bid::orderBy('created_at', 'desc')->get();

        return Inertia::render('Profile', [
            'user' => $user,
            'bids' => $bids
        ]);
    }

    public function update(Request $request, $id) {
        $bid = Bid::where('id', $id)->first();
        $bid->update([
            'status' => $request->status
        ]);
    }
    

    public function delete(Request $request, $id) {
        $bid = Bid::where('id', $id)->first();
        $bid->delete();
        
    }

}
