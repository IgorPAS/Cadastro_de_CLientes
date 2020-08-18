<?php

namespace App\Http\Controllers;

use App\Http\Requests\RequestChangePass;
use App\User;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class ChangePasswordController extends Controller
{
    public function changepassword(RequestChangePass $request){
        return ($this->getRegister($request))->count()>0? $this->changePass($request):$this->responseErro();
    }

    public function getRegister($params){
      return DB::table('password_resets')->where(['email'=> $params->email, 'token' => $params->token]);
    }


    public function responseErro(){
        return response()->json([
            "error" => "Email ou Token inválido"
        ], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    public function changePass($params){
        $user = User::where('email', $params->email)->first();
        $user->update(['password' => $params->password]);
        $this->getRegister($params)->delete();
        return response()->json([
            "data" => "Senha atualizada com sucesso"
        ], Response::HTTP_CREATED);

    }
}
