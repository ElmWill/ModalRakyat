<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InvestorController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $investor = $user->investorProfile;

        if (!$investor) {
            return response()->json(['message' => 'Profil investor tidak ditemukan.'], 404);
        }

        $activeInvestments = $investor->investments()
                                ->where('status', 'active')
                                ->with('umkmProject.umkm')
                                ->latest('investmentDate')
                                ->get();

        $historyInvestments = $investor->investments()
                                      ->whereIn('status', ['completed', 'sold', 'failed', 'cancelled'])
                                      ->with('umkmProject.umkm')
                                      ->latest('investmentDate')
                                      ->get();

        $data = [
            'investor' => $investor,
            'summary' => [
                'availableBalance' => $investor->availableBalance,
                'currentInvestmentValue' => $investor->currentInvestmentValue,
            ],
            'portfolio' => $activeInvestments,
            'history' => $historyInvestments,
        ];

        return response()->json($data);
    }
}
