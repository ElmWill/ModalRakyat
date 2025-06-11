<?php

use App\Http\Controllers\WatchlistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InvestorController;

Route::prefix('investor')->name('investor.')->group(function () {
    Route::get('/dashboard', [InvestorController::class, 'index'])->name('dashboard');
});

Route::prefix('watchlist')->name('watchlist.')->group(function () {
    Route::get('/', [WatchlistController::class, 'index'])->name('index');
    Route::post('/{project:projectID}', [WatchlistController::class, 'store'])->name('watchlist.add');
    Route::delete('/{project:projectID}', [WatchlistController::class, 'destroy'])->name('watchlist.remove');
});