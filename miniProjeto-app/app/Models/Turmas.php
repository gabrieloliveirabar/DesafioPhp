<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turmas extends Model
{
    
    use HasFactory;
    use HasUuids;

    protected $table = 'turmas';

    protected $fillable = [
        'codigo',
        'data_inicio',
        'data_fim',
        'quantidade_maxima_alunos'
    ];

    public function alunos()
    {
        return $this->belongsToMany(User::class, 'users_turmas', 'turma_id', 'aluno_id');
    }
}
