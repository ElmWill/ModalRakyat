<?php

namespace App\Http\Controllers;

use App\Models\UMKMProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WatchlistController extends Controller
{
    public function index()
    {
        $investor = Auth::user()->investorProfile;
        if (!$investor) {
            return response()->json(['message' => 'Profil investor tidak ditemukan.'], 404);
        }

        $watchlist = Auth::user()->investorProfile->watchlist()->with('umkm')->get();
        return response()->json($watchlist);
    }

    public function store(UMKMProject $project)
    {
        $investor = Auth::user()->investorProfile;
        if (!$investor) {
            return response()->json(['message' => 'Profil investor tidak ditemukan.'], 404);
        }
        
        Auth::user()->investorProfile->watchlist()->syncWithoutDetaching([$project->projectID]);
        return response()->json(['message' => 'Proyek ditambahkan ke watchlist.'], 201);
    }

    public function destroy(UMKMProject $project)
    {
        $investor = Auth::user()->investorProfile;
        if (!$investor) {
            return response()->json(['message' => 'Profil investor tidak ditemukan.'], 404);
        }

        Auth::user()->investorProfile->watchlist()->detach($project->projectID);
        return response()->json(['message' => 'Proyek dihapus dari watchlist.'], 200);
    }
}
