<?php

namespace App\Http\Requests\Turmas;

use Illuminate\Foundation\Http\FormRequest;

class PatchTurmasRequest extends FormRequest
{
    public function authorize(): bool {
        return true;
    }

    public function rules(): array
    {
        return [
            'codigo' => ['unique:turmas'],
            'data_inicio' => [ 'date_format:Y-m-d', 'after_or_equal:today'],
            'data_fim' => [ 'date_format:Y-m-d', 'after:data_inicio'],
            'quantidade_maxima_alunos' => ['integer', 'min:1'],
        ];
    }

    
}
