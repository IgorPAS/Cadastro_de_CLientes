<?php

namespace App\Http\Controllers;

use App\Client;
use App\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function all(){
        $users = User::all();
        return $users;
    }
    
    public function user($id){
        $user = User::find($id)->first();
        return response()->json([
            $user
        ]);
    }

    public function register(Request $request){
        $data = $request->all();
        $client = Client::find($data['user_id']);
        $client == null? Client::create($data):$client->updated($data);

        return response()->json([
            "data" => "Dados atualizados com sucesso",
            $client
        ], Response::HTTP_CREATED);
    }
}
