<?php 

namespace App\Services;

use App\Exceptions\AppError;
use App\Models\User;

class CreateUserService{

    public function execute(array $data){

        $userFound = User::firstWhere('email', $data['email']);
        if(!is_null($userFound)){
            throw new AppError('Email already exists', 400);
        };

        $userFound = User::firstWhere('cpf', $data['cpf']);
        if(!is_null($userFound)){
            throw new AppError('CPF already exists', 400);
        };

        $dataNascimento = date('Y-m-d', strtotime($data['data_nascimento']));
      
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password'],
            'cpf' => $data['cpf'],
            'sexo' => $data['sexo'],
            'data_nascimento' => $dataNascimento,
            'renda_mensal' => $data['renda_mensal'],
        ]);
    }
}