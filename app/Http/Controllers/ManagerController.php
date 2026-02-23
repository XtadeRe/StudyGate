<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManagerController extends Controller
{
    public function index() {

        $bids = Bid::all();

        return Inertia::render('Manager/Index', [
            'bids' => $bids
        ]);
    }
}
