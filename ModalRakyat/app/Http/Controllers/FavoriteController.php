<?php

namespace App\Http\Controllers;

use App\Models\UMKMProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    public function index()
    {
        $investor = Auth::user()->investorProfile;
        if (!$investor) {
            return response()->json(['message' => 'Profil investor tidak ditemukan.'], 404);
        }

        $favorite = Auth::user()->investorProfile->favorites()->with('umkm')->get();
        return response()->json($favorite);
    }

    public function store(UMKMProject $project)
    {
        $investor = Auth::user()->investorProfile;
        if (!$investor) {
            return response()->json(['message' => 'Profil investor tidak ditemukan.'], 404);
        }
        
        Auth::user()->investorProfile->favorites()->syncWithoutDetaching([$project->projectID]);
        return response()->json(['message' => 'Proyek ditambahkan ke favorites.'], 201);
    }

    public function destroy(UMKMProject $project)
    {
        $investor = Auth::user()->investorProfile;
        if (!$investor) {
            return response()->json(['message' => 'Profil investor tidak ditemukan.'], 404);
        }

        Auth::user()->investorProfile->favorites()->detach($project->projectID);
        return response()->json(['message' => 'Proyek dihapus dari favorites.'], 200);
    }
}
