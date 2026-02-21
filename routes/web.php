<?php

use App\Http\Controllers\Auth\GoogleAuthController;
use App\Http\Controllers\BidController;
use App\Http\Controllers\BidDataController;
use App\Http\Controllers\InstitutionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;


Route::get('/register', fn () => inertia('Register'))->name('register');
Route::get('/login', fn () => inertia('Login'))->name('login');
Route::get('/auth/google', [GoogleAuthController::class, 'redirectToGoogle'])
    ->name('login.google');

Route::get('/auth/google/callback', [GoogleAuthController::class, 'handleGoogleCallback'])
    ->name('login.google.callback');

Route::get('/catalog', [InstitutionController::class, 'index'])->name('catalog');
Route::get('/catalog/{id}', [InstitutionController::class, 'show'])->name('institutionPage');
Route::get('/immigration', [InstitutionController::class, 'showFromRules'])->name('immigration');
Route::get('/', fn () => inertia('Main'))->name('home');

Route::post('/register', [AuthController::class, 'store'])->name('register.store');
Route::post('/login', [AuthController::class, 'login'])->name('login.store');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::post('/catalog/{id}/bids', [BidController::class, 'store'])->name('bid.store');

Route::get('/profile', [UserController::class, 'index'])->name('profile.index');
Route::get('/profile/bids', [UserController::class, 'bids'])->name('profile.bids');
Route::put('/profile/bids/{id}', [UserController::class, 'updateBidStatus'])->name('bid.update');

Route::get('/profile/bids/fillBid/{id}', [BidDataController::class, 'show'])->name('bid.fill');

Route::post('/bids/{bid}/upload-files', [BidDataController::class, 'uploadFiles'])->name('bids.upload-files');
Route::delete('/bids/{id}/delete-file', [BidDataController::class, 'deleteFile'])->name('bids.destroy');
