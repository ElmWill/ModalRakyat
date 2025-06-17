<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InvestmentProposal;

class InvestmentController extends Controller
{
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
