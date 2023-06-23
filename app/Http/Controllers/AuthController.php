<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\StoresiteRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class AuthController extends Controller
{
    function signup(SignupRequest $request){
        $data = $request->validated();

        $user = \App\Models\User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['name']),
            'role' => $data['role'],
            'assigned_site_id' => $data['assigned_site_id']
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
            //TODO
        ]);
    }
    function login(LoginRequest $request){
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'The Provided credentials are not correct'
            ], 422);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
            //TODO
        ]);

    }
    function logout(Request $request){
         /** @var \App\Models\User $user */
         $user = Auth::user();
         // Revoke the token that was used to authenticate the current request...
         $user->currentAccessToken()->delete();
 
         return response([
             'success' => true
         ]);
    }
}
