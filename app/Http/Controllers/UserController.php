<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index() {

        $user = User::where('id', auth()->id())->first();

        return Inertia::render('Profile', [
            'user' => $user,
        ]);
    }
}
