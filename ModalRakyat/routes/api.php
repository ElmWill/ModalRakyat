<?php

use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\UMKMProjectController;
use App\Http\Controllers\WalletController;
use App\Http\Controllers\WatchlistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InvestorController;
use App\Http\Controllers\Api\AuthController;

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

Route::prefix('wallet')->name('wallet.')->group(function () {
    Route::post('/deposit', [WalletController::class, 'prepareDeposit'])->name('deposit.prepare');
    Route::post('/deposit/{transaction:transactionID}/confirm', [WalletController::class, 'confirmDeposit'])->name('deposit.confirm');
    Route::post('/withdrawal', [WalletController::class, 'requestWithdrawal'])->name('withdrawal.request');
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return response()->json($request->user());
    });
    Route::post('/logout', function (Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    });
});

Route::middleware('auth:sanctum')->post('/switch-role', function (Request $request) {
    $role = Role::where('name', $request->role)->firstOrFail();
    $user = $request->user();

    if (!$user->roles->contains($role)) {
        return response()->json(['error' => 'User does not have this role'], 403);
    }

    $user->active_role = $role->id;
    $user->save();

    return response()->json(['message' => 'Switched to ' . $role->name]);
});