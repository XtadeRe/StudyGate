<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use Illuminate\Http\Request;

class BidController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'university_id' => 'nullable|exists:universities,id',
            'institution_id' => 'required|exists:institutions,id',
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'tg_username' => 'required|string|max:255',
            'buy_method' => 'required|string|in:Наличными в офис,Картой',
        ]);

        $bid = Bid::create($validated);

        return redirect()->back()->with('success', 'Заявка успешно отправлена!');
    }
}
