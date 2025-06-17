<?php

namespace App\Http\Controllers;

use App\Models\Project;

class ProjectController extends Controller
{
    public function progress($id)
    {
        $project = Project::findOrFail($id);
        $percent = ($project->funding_collected / $project->funding_target) * 100;
        return response()->json([
            'collected' => $project->funding_collected,
            'target' => $project->funding_target,
            'progress' => round($percent, 2)
        ]);
    }
}
