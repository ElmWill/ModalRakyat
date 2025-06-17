<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Story;

class StoryController extends Controller
{
    public function index()
    {
        return response()->json(Story::latest()->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'nullable|string',
        ]);

        $story = Story::create(array_merge($data, ['user_id' => $request->user()->id]));
        return response()->json($story);
    }
}
