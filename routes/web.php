<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;

Route::get('/catalog', fn () => inertia('Catalog'))->name('catalog');
Route::get('/register', fn () => inertia('Register'))->name('register');
Route::get('/login', fn () => inertia('Login'))->name('login');
Route::get('/', fn () => inertia('Main'))->name('home');

Route::post('/register', [AuthController::class, 'store'])->name('register.store');
Route::post('/login', [AuthController::class, 'login'])->name('login.store');

