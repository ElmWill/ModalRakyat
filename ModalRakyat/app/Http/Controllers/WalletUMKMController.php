<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WalletUMKMController extends Controller
{
    public function tracking(Request $request)
    {
        return response()->json($request->user()->transactions()->latest()->get());
    }
}
