<?php

namespace App\Http\Controllers;

use App\Models\UMKMProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UMKMProjectController extends Controller
{
    public function show(UMKMProject $project)
    {
        $project->load('umkm', 'investments.investor.user');

        $user = auth('sanctum')->user();
        
        $isWatchlisted = false;
        $isFavorited = false;

        if ($user && $investor = $user->investorProfile) {
            $isWatchlisted = $investor->watchlist()->where('umkm_projects.projectID', $project->projectID)->exists();
            $isFavorited = $investor->favorites()->where('umkm_projects.projectID', $project->projectID)->exists();
        }

        $data = [
            'project' => $project,
            'userInteraction' => [
                'isWatchlisted' => $isWatchlisted,
                'isFavorited' => $isFavorited,
            ]
        ];

        return response()->json($data);
    }
}
