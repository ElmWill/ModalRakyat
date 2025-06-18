<?php

namespace App\Http\Controllers;

use App\Models\Investment;
use App\Models\InvestmentSaleOffer;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SecondaryMarketController extends Controller
{
    public function createOffer(Request $request, Investment $investment)
    {
        $investor = Auth::user()->investorProfile;

        if ($investment->investorID !== $investor->investorID) {
            return response()->json(['message' => 'Tidak diizinkan.'], 403);
        }
        if ($investment->status !== 'active') {
            return response()->json(['message' => 'Investasi ini tidak dapat dijual.'], 422);
        }

        $request->validate(['askingPrice' => 'required|numeric|min:0']);

        $offer = InvestmentSaleOffer::create([
            'investmentID' => $investment->investmentID,
            'sellerInvestorID' => $investor->investorID,
            'askingPrice' => $request->askingPrice,
            'status' => 'active',
        ]);

        $investment->update(['status' => 'on_sale']);

        return response()->json(['message' => 'Investasi Anda telah berhasil ditempatkan di pasar sekunder.', 'offer' => $offer], 201);
    }

    public function index()
    {
        $offers = InvestmentSaleOffer::where('status', 'active')
            ->with('investment.umkmProject.umkm', 'seller.user')
            ->latest()
            ->paginate(20);
            
        return response()->json($offers);
    }

    public function executePurchase(InvestmentSaleOffer $offer)
    {
        $buyer = Auth::user()->investorProfile;
        $seller = $offer->seller;

        if ($offer->status !== 'active') {
            return response()->json(['message' => 'Penawaran ini sudah tidak tersedia.'], 422);
        }
        if ($buyer->investorID === $seller->investorID) {
            return response()->json(['message' => 'Anda tidak bisa membeli investasi Anda sendiri.'], 422);
        }
        if ($buyer->availableBalance < $offer->askingPrice) {
            return response()->json(['message' => 'Saldo Anda tidak mencukupi.'], 422);
        }

        try {
            DB::transaction(function () use ($offer, $buyer, $seller) {
                $seller->increment('availableBalance', $offer->askingPrice);
                $buyer->decrement('availableBalance', $offer->askingPrice);

                $investment = $offer->investment;
                $investment->update([
                    'investorID' => $buyer->investorID,
                    'status' => 'active',
                ]);

                $offer->update([
                    'status' => 'sold',
                    'buyerInvestorID' => $buyer->investorID,
                    'sellingPrice' => $offer->askingPrice,
                ]);

                Transaction::create([
                    'userID' => $seller->userID,
                    'investmentID' => $investment->investmentID,
                    'type' => 'investment_sale_payout',
                    'amount' => $offer->askingPrice,
                    'status' => 'success',
                    'description' => "Hasil penjualan investasi di proyek {$investment->umkmProject->projectName}",
                ]);
                
                Transaction::create([
                    'userID' => $buyer->userID,
                    'investmentID' => $investment->investmentID,
                    'type' => 'investment_purchase', 
                    'amount' => $offer->askingPrice * -1, 
                    'status' => 'success',
                    'description' => "Pembelian investasi di proyek {$investment->umkmProject->projectName}",
                ]);
            });
        } catch (\Exception $e) {
            report($e);
            return response()->json(['message' => 'Terjadi kesalahan saat memproses pembelian.'], 500);
        }

        return response()->json(['message' => 'Pembelian investasi berhasil!']);
    }
}
