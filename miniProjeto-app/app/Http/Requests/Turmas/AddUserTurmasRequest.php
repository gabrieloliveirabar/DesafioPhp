<?php

namespace App\Http\Requests\Turmas;

use Illuminate\Foundation\Http\FormRequest;

class AddUserTurmasRequest extends FormRequest
{
    public function authorize(): bool {
        return true;
    }

    public function rules(): array
    {
        return [
            'aluno_id' => ['required','exists:users,id'], 
            'turma_id' => ['required','exists:turmas,id'], 
        ];
    }

    
}
