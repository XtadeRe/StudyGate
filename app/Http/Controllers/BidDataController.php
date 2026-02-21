<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
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

    public function deleteFile(Request $request, $id)
    {
        $bid = Bid::where('id', $id)
            ->where('user_id', auth()->id())
            ->firstOrFail();

        $request->validate([
            'file_path' => 'required|string'
        ]);

        $files = $bid->files ?? [];
        $fileFound = false;
        $newFiles = [];

        foreach ($files as $file) {
            if ($file['path'] === $request->file_path) {
                Storage::disk('public')->delete($request->file_path);
                $fileFound = true;
            } else {
                $newFiles[] = $file;
            }
        }

        if (!$fileFound) {
            return back()->with('error', 'Файл не найден');
        }

        $bid->files = $newFiles;
        $bid->save();

        return back()->with('success', 'Файл успешно удален');
    }
}
