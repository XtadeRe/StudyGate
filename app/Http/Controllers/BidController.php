<?php

namespace App\Http\Controllers;
use App\Http\Requests\BidRequest;
use App\Models\Bid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BidController extends Controller
{
    public function store(BidRequest $request, $id)
    {
        $validated = $request->validated();
        $validated['user_id'] = Auth::id();
        $validated['institution_id'] = $id;
        $bid = Bid::create($validated);

        return redirect()->back()->with('success', 'Заявка успешно отправлена!');
    }
}
