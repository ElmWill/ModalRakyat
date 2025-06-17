<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dividend;

class DividendController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->validate([
            'project_id' => 'required',
            'investor_id' => 'required',
            'amount' => 'required|numeric',
            'note' => 'nullable|string'
        ]);

        $dividend = Dividend::create($data);
        return response()->json(['message' => 'Dividend sent', 'data' => $dividend]);
    }

    public function received(Request $request)
    {
        return response()->json(Dividend::where('investor_id', $request->user()->id)->get());
    }
}
