<?php

namespace App\Http\Controllers;

use App\Models\UMKMProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{
    public function searchProjects(Request $request)
    {
        $query = UMKMProject::query()->with('umkm');

        if ($request->has('search') && !empty($request->input('search'))) {
            $searchTerm = $request->input('search');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('projectName', 'LIKE', "%{$searchTerm}%")
                  ->orWhere('projectDescription', 'LIKE', "%{$searchTerm}%")
                  ->orWhereHas('umkm', function ($subQ) use ($searchTerm) {
                    $subQ->where('businessName', 'LIKE', "%{$searchTerm}%");
                  });
            });
        }

        if ($request->has('status') && !empty($request->input('status'))) {
            $statusInput = $request->input('status');
            $statuses = explode(',', $statusInput);
            $query->whereIn('projectStatus', $statuses);
        }

        $investor = Auth::user()?->investorProfile;
        
        $watchlistProjectIds = [];
        $favoriteProjectIds = [];
        if ($investor) {
            $watchlistProjectIds = $investor->watchlist()->pluck('umkm_projects.projectID')->toArray();
            $favoriteProjectIds = $investor->favorites()->pluck('umkm_projects.projectID')->toArray();
        }

        $orderByClause = "CASE ";
        $bindings = [];

        if (!empty($watchlistProjectIds)) {
            $idsString = implode(',', array_fill(0, count($watchlistProjectIds), '?'));
            $orderByClause .= "WHEN umkm_projects.projectID IN ({$idsString}) THEN 0 ";
            $bindings = array_merge($bindings, $watchlistProjectIds);
        }

        if (!empty($favoriteProjectIds)) {
            $idsString = implode(',', array_fill(0, count($favoriteProjectIds), '?'));
            $orderByClause .= "WHEN umkm_projects.projectID IN ({$idsString}) THEN 1 ";
            $bindings = array_merge($bindings, $favoriteProjectIds);
        }
        
        $orderByClause .= "ELSE 2 END ASC";

        if ($investor) {
            $query->orderByRaw($orderByClause, $bindings);
        }
       
        $query->latest('campaignStartDate');
        $projects = $query->paginate(12)->withQueryString();

        return response()->json($projects);
    }
}
