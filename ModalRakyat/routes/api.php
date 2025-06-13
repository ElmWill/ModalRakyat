<?php

use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\UMKMProjectController;
use App\Http\Controllers\WatchlistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InvestorController;

Route::prefix('investor')->name('investor.')->group(function () {
    Route::get('/dashboard', [InvestorController::class, 'index'])->name('dashboard');
});

Route::prefix('watchlist')->name('watchlist.')->group(function () {
    Route::get('/', [WatchlistController::class, 'index'])->name('index');
    Route::post('/{project:projectID}', [WatchlistController::class, 'store'])->name('add');
    Route::delete('/{project:projectID}', [WatchlistController::class, 'destroy'])->name('remove');
});

Route::prefix('favorites')->name('favorites.')->group(function () {
    Route::get('/', [FavoriteController::class, 'index'])->name('index');
    Route::post('/{project:projectID}', [FavoriteController::class, 'store'])->name('add');
    Route::delete('/{project:projectID}', [FavoriteController::class, 'destroy'])->name('remove');
});

Route::get('/projects', [UMKMProjectController::class, 'index'])->name('projects.index');