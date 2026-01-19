<?php

use App\Http\Controllers\InstitutionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;

Route::get('/catalog', [InstitutionController::class, 'index'])->name('catalog');
Route::get('/register', fn () => inertia('Register'))->name('register');
Route::get('/login', fn () => inertia('Login'))->name('login');
Route::get('/catalog/{id}', [InstitutionController::class, 'show'])->name('institutionPage');
Route::get('/immigration', fn () => inertia('Imigration'))->name('imigration');
Route::get('/', fn () => inertia('Main'))->name('home');

Route::post('/register', [AuthController::class, 'store'])->name('register.store');
Route::post('/login', [AuthController::class, 'login'])->name('login.store');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
