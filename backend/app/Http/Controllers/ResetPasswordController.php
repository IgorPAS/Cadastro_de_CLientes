<?php

namespace App\Http\Controllers;

use App\Mail\EmailResetPass;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;

class ResetPasswordController extends Controller
{
   public function sendEmail(Request $request){
        if(!$this->emailIsStored($request->email)){
            return response()->json([
                "error" => "Este Email não está cadastrado"
            ], HttpFoundationResponse::HTTP_NOT_FOUND);
        }

        $token = $this->hasToken($request->email);
        

        Mail::to($request->email)->send(new EmailResetPass($token));
        return response()->json([
            "data" => "Enviamos um email para recuperar sua senha "
        ], HttpFoundationResponse::HTTP_OK);
    }

    public function emailIsStored($email){
        return !!User::where('email', $email)->first();
    }
   
    public function hasToken($email){
        $token = DB::table('password_resets')->where('email', $email)->first();
        if($token){
            return $token->token;
        }
        
        $token = Str::random(30);
        $this->saveToken($token, $email);
        return $token;
    }

    public function saveToken($token, $email){
        DB::table('password_resets')->insert([
            "email" => $email,
            "token" => $token,
            "created_at" => now()
        ]);
    }

    
}
