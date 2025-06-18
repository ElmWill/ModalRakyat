<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Investment;
use App\Models\Transaction;
use App\Models\UMKMProject;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\InvestmentProposal;

class InvestmentController extends Controller
{
    public function store(Request $request, UMKMProject $project)
    {
        $validatedData = $request->validate([
            'amountInvested' => 'required|numeric|min:10000',
        ]);

        $investor = Auth::user()->investorProfile;
        $amountToInvest = $validatedData['amountInvested'];

        if (!$investor) {
            return response()->json(['message' => 'Anda harus melengkapi profil investor untuk berinvestasi.'], 403);
        }
        if ($project->projectStatus !== 'active_funding') {
            return response()->json(['message' => 'Proyek ini tidak sedang dalam masa pendanaan.'], 422);
        }
        if ($investor->availableBalance < $amountToInvest) {
            return response()->json(['message' => 'Saldo Anda tidak mencukupi untuk melakukan investasi ini.'], 422);
        }

        $remainingFunding = $project->fundingTarget - $project->amountRaised;
        if ($amountToInvest > $remainingFunding) {
            return response()->json(['message' => "Jumlah investasi tidak bisa melebihi sisa dana yang dibutuhkan: Rp " . number_format($remainingFunding)], 422);
        }
        
        try {
            $investment = DB::transaction(function () use ($investor, $project, $amountToInvest) {
                $investor->decrement('availableBalance', $amountToInvest);
                $project->increment('amountRaised', $amountToInvest);
                $investmentPercentage = ($project->fundingTarget > 0) ? ($amountToInvest / $project->fundingTarget) * 100 : 0;
                $expectedReturn = $amountToInvest * $project->interestRate;

                $newInvestment = Investment::create([
                    'investorID' => $investor->investorID,
                    'projectID' => $project->projectID,
                    'amountInvested' => $amountToInvest,
                    'status' => 'active',
                    'investmentPercentage' => $investmentPercentage,
                    'expectedReturn' => $expectedReturn,
                ]);

                Transaction::create([
                    'userID' => Auth::id(),
                    'investmentID' => $newInvestment->investmentID,
                    'type' => 'investment_payment',
                    'amount' => $amountToInvest * -1,
                    'status' => 'success',
                    'description' => "Investasi pada proyek: {$project->projectName}",
                ]);

                if ($project->fresh()->amountRaised >= $project->fundingTarget) {
                    $project->update(['projectStatus' => 'funded']);
                }

                return $newInvestment;
            });

        } catch (\Exception $e) {
            report($e);
            return response()->json(['message' => 'Terjadi kesalahan internal saat memproses investasi.'], 500);
        }

        return response()->json([
            'message' => 'Selamat! Investasi Anda berhasil.',
            'investment' => $investment->load('umkmProject.umkm'),
        ], 201);
    }

    public function propose(Request $request)
    {
        $data = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'amount' => 'required|numeric|min:10000'
        ]);

        $proposal = InvestmentProposal::create([
            'user_id' => $request->user()->id,
            'project_id' => $data['project_id'],
            'amount' => $data['amount'],
            'status' => 'pending',
        ]);

        return response()->json($proposal);
    }
}
