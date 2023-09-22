<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

  
    public function rules(): array
    {
        return [
        'name' => ['required', 'string'],
        'email' => ['required', 'email', 'unique:users,email'],
        'password'=> ['required', 'string'],
        'cpf' => ['required', 'string', 'unique:users,cpf'],
        'sexo' => ['required', 'in:Masculino,Feminino'],
        'data_nascimento' => ['required', 'date_format:Y-m-d'],
        'renda_mensal' => ['nullable', 'numeric', 'min:0']
        ];
    }

    
}
