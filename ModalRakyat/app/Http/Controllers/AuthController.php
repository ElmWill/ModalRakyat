<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\Role; 

class AuthController extends Controller
{
    // Register
    public function register(Request $request)
    {
        Log::info('Register Request', $request->all());

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8'
        ]);

        $investorRole = Role::where('name', 'investor')->first();

        if (!$investorRole) {
            return response()->json(['message' => 'Role investor not found. Please seed roles table.'], 500);
        }
        
        if (!$investorRole) {
            return response()->json(['error' => 'Role investor not found'], 500);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'active_role' => $investorRole->id
        ]);

        $user->roles()->attach($investorRole);
        
        $token = $user->createToken('token-name')->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'token' => $token
        ], 201);

    }
    // Login
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();
        $user->tokens()->delete();
        $token = $user->createToken('token-name')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'token' => $token
        ]);
    }
    
    public function profile(Request $request)
    {
        return response()->json($request->user());
    }

    public function switchRole(Request $request)
    {
        $user = $request->user();
        $newRoleName = $user->activeRole->name === 'investor' ? 'umkm' : 'investor';

        if (!$user->roles->contains('name', $newRoleName)) {
            return response()->json(['message' => 'User does not have the role: ' . $newRoleName], 403);
        }

        $newRole = \App\Models\Role::where('name', $newRoleName)->first();

        if (!$newRole) {
            return response()->json(['message' => 'Role not found'], 500);
        }

        $user->active_role = $newRole->id;
        $user->save();

        return response()->json(['message' => 'Role changed to ' . $newRoleName]);
    }

    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->userID . ',userID',
            'noHP' => 'nullable|string|max:20',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'noHP' => $request->noHP,
        ]);

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

}

