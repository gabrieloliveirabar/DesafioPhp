<?php

namespace App\Http\Requests\Turmas;

use Illuminate\Foundation\Http\FormRequest;

class CreateTurmasRequest extends FormRequest
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
            'codigo' => ['required', 'unique:turmas'],
            'data_inicio' => ['required',  'date_format:Y-m-d', 'after_or_equal:today'],
            'data_fim' => ['required',  'date_format:Y-m-d', 'after:data_inicio'],
            'quantidade_maxima_alunos' => ['required', 'integer', 'min:1'],
        ];
    }

    
}
