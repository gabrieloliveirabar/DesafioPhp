<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PatchUserRequest extends FormRequest
{
    public function authorize(): bool {
        return auth()->user()->id == $this->route('id');
    }

    public function rules(): array
    {
        return [
            'name' => [ 'string', 'nullable'],
            'email' => [ 'email', 'unique:users,email'],
            'password'=> [ 'string'],
            'cpf' => [ 'string', 'unique:users,cpf'],
            'sexo' => [ 'in:Masculino,Feminino'],
            'data_nascimento' => [ 'date_format:Y-m-d'],
            'renda_mensal' => ['nullable', 'numeric', 'min:0']
        ];
    }

    
}
