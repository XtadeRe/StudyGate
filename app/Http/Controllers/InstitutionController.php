<?php

namespace App\Http\Controllers;

use App\Models\Institution;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InstitutionController extends Controller
{
    public function index()
    {
        $institutions = Institution::all();

        return Inertia::render('Catalog', [
            'institutions' => $institutions
        ]);
    }
}
