<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SecondaryMarketController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UMKMProjectController;
use App\Http\Controllers\WalletController;
use App\Http\Controllers\WatchlistController;
use App\Http\Controllers\WalletUMKMController;
use App\Http\Controllers\InvestmentController;
use App\Http\Controllers\DividendController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\StoryController;
use App\Models\Investment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InvestorController;
use App\Models\Role;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/projects', [SearchController::class, 'searchProjects'])->name('projects.search');
Route::get('/projects/{project:projectID}', [UMKMProjectController::class, 'show'])->name('projects.show');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return response()->json($request->user());
    });

    Route::post('/logout', function (Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    });

    Route::prefix('investor')->name('investor.')->group(function () {
        Route::get('/dashboard', [InvestorController::class, 'index'])->name('dashboard');
        Route::get('/transactions', [TransactionController::class, 'getBuyOrSell'])->name('transactions.index');
        Route::get('/transactions/{transaction:transactionID}', [TransactionController::class, 'show'])->name('transactions.show');
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

    Route::prefix('wallet')->name('wallet.')->group(function () {
        Route::post('/deposit', [WalletController::class, 'prepareDeposit'])->name('deposit.prepare');
        Route::post('/deposit/{transaction:transactionID}/confirm', [WalletController::class, 'confirmDeposit'])->name('deposit.confirm');
        Route::post('/withdrawal', [WalletController::class, 'requestWithdrawal'])->name('withdrawal.request');
    });

    Route::post('/projects/{project:projectID}/invest', [Investment::class, 'store'])->name('investments.store');

    Route::post('/investments/{investment:investmentID}/sell-offer', [SecondaryMarketController::class, 'createOffer'])->name('market.create-offer');
    Route::get('/market/offers', [SecondaryMarketController::class, 'index'])->name('market.index');
    Route::post('/market/offers/{offer:offerID}/purchase', [SecondaryMarketController::class, 'executePurchase'])->name('market.purchase');
});

Route::middleware('auth:sanctum')->put('/user/update-profile', [AuthController::class, 'updateProfile']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/funds', [WalletUMKMController::class, 'tracking']);
    Route::post('/investments/propose', [InvestmentController::class, 'propose']);
    Route::post('/dividends/send', [DividendController::class, 'send']);
    Route::get('/dividends/received', [DividendController::class, 'received']);
    Route::get('/projects/{id}/progress', [ProjectController::class, 'progress']);
    Route::post('/stories', [StoryController::class, 'store']);
    Route::get('/stories', [StoryController::class, 'index']);
});