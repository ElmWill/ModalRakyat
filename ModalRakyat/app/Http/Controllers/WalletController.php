<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class WalletController extends Controller
{
    public function prepareDeposit(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:10000',
        ]);

        $user = Auth::user();

        $transaction = Transaction::create([
            'userID' => $user->userID,
            'investmentID' => null,
            'type' => 'deposit',
            'amount' => $request->amount,
            'status' => 'pending',
            'description' => 'Deposit dana ke saldo akun.',
        ]);

        $confirmationUrl = route('wallet.deposit.confirm', ['transaction' => $transaction->transactionID]);

        return response()->json([
            'message' => 'Transaksi deposit dibuat. Lanjutkan ke URL konfirmasi untuk menyelesaikan.',
            'transaction' => $transaction,
            'confirmation_url' => $confirmationUrl
        ]);
    }

    public function confirmDeposit(Request $request, Transaction $transaction)
    {
        if ($transaction->userID !== Auth::id()) {
            return response()->json(['message' => 'Tidak diizinkan.'], 403);
        }

        if ($transaction->type !== 'deposit' || $transaction->status !== 'pending') {
            return response()->json(['message' => 'Transaksi ini tidak valid atau sudah diproses.'], 422);
        }

        try {
            DB::transaction(function () use ($transaction) {
                $transaction->update(['status' => 'success']);
                $investorProfile = $transaction->user->investorProfile;
                $investorProfile->increment('availableBalance', $transaction->amount);
            });
        } catch (\Exception $e) {
            report($e);
            return response()->json(['message' => 'Gagal memproses deposit, terjadi kesalahan server.'], 500);
        }
        
        return response()->json([
            'message' => 'Deposit berhasil! Saldo Anda telah diperbarui.',
            'transaction' => $transaction->fresh(), 
        ]);
    }

    public function requestWithdrawal(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:10000',
        ]);

        $investor = Auth::user()->investorProfile;
        $amountToWithdraw = $request->amount;

        if (!$investor || $investor->availableBalance < $amountToWithdraw) {
            return response()->json(['message' => 'Saldo Anda tidak mencukupi untuk melakukan penarikan.'], 422); // Unprocessable Entity
        }

        try {
            DB::transaction(function () use ($investor, $amountToWithdraw) {
                $investor->decrement('availableBalance', $amountToWithdraw);

                Transaction::create([
                    'userID' => Auth::id(),
                    'investmentID' => null,
                    'type' => 'withdrawal',
                    'amount' => $amountToWithdraw * -1,
                    'status' => 'awaiting_approval',
                    'description' => 'Permintaan penarikan dana.',
                ]);
            });
        } catch (\Exception $e) {
            report($e);
            return response()->json(['message' => 'Gagal memproses permintaan penarikan, terjadi kesalahan server.'], 500);
        }

        return response()->json([
            'message' => 'Permintaan penarikan dana Anda telah berhasil diajukan dan akan segera diproses.'
        ], 200);
    }
}
