<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    public function getBuyOrSell(Request $request)
    {
        $request->validate([
            'type' => 'sometimes|string',
        ]);

        $user = Auth::user();
        if (!$user->investorProfile) {
            return response()->json(['message' => 'Anda harus menjadi investor untuk mengakses fitur ini.'], 403);
        }

        $baseInvestmentTypes = ['investment_payment', 'investment_sale_payout'];
        $query = $user->transactions()->whereIn('type', $baseInvestmentTypes);

        if ($request->filled('type')) {
            $requestedTypes = explode(',', $request->input('type'));
            $query->whereIn('type', $requestedTypes);
        }


        $transactions = $query->with('investment.umkmProject.umkm')
                            ->latest()
                            ->paginate(15)
                            ->withQueryString();

        return response()->json($transactions);
    }

    public function show(Transaction $transaction)
    {
        if ($transaction->userID !== Auth::id()) {
            return response()->json(['message' => 'Akses ditolak.'], 403);
        }

        $investmentRelatedTypes = [
            'investment_payment',
            'investment_sale_payout',
        ];

        if (in_array($transaction->type, $investmentRelatedTypes)) {
            $transaction->loadMissing('investment.umkmProject.umkm');
        }

        return response()->json($transaction);
    }
}
