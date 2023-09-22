<?php 

namespace App\Services;

use App\Exceptions\AppError;
use App\Models\User;

class PatchUserService{

    public function execute(array $data, string $id){

        $user = User::find($id);
       
        if(!$user){
            throw new AppError("usernot exists", 401);
        } 
    
         $updateData = [
            'name' =>isset( $data['name'])?$data['name']: $user['name'],
            'email' => isset( $data['email'])? $data['email']:$user['email'],
            'password' =>isset( $data['password'])? $data['password']:$user['password'],
            'cpf' => isset( $data['cpf'])? $data['cpf']:$user['cpf'],
            'sexo' => isset( $data['sexo'])? $data['sexo']:$user['sexo'],
            'data_nascimento' => isset($data['data_nascimento'])? date('Y-m-d', strtotime($data['data_nascimento'])): $user['data_nascimento'],
            'renda_mensal' => $data['renda_mensal'],        
           
         ];

        $user->update($updateData);
      
        return response()->json(['message' => 'User updated successfully']);
    }
}