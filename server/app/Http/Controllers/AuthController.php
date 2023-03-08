<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

use  App\Models\User;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',//name
            'email' => 'required|string|email|max:255|unique:users',//primary key
            'password' => 'required|string|min:8',//Password
            'confirmPassword' => 'required|string|min:8|same:password',//Confirm Password
        ]);

            $user = User::create([//creation of the user
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
                'role' => 'USER',
            ]);
            $token = $user->createToken('auth_token')->plainTextToken;//token authentification (identify user)
            return response()->json([ //send Json response to client
                'access_token' => $token,//Session Cookie (like)
                'token_type' => 'Bearer',
            ]);

    }
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid login details'], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();//get user

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([//send to react app
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    public function logout(Request $request) //Logout
    {
        Auth::user()->tokens()->delete();
        return response()->json(["message" => "Logout."]);
    }
}
