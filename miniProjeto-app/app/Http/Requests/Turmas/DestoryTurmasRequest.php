<?php

namespace App\Http\Requests\Turmas;

use Illuminate\Foundation\Http\FormRequest;

class DestoryTurmasRequest extends FormRequest
{
    public function authorize(): bool {
        return true;
    }

    public function rules(): array
    {
        return [
        
        ];
    }

    
}
