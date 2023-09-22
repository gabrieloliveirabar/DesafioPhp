<?php 

namespace App\Services\Turmas;

use App\Exceptions\AppError;
use App\Models\Turmas;

class CreateTurmasService{

    public function execute(array $data){

        $data_inicio = isset($data['data_inicio']) ? date('Y-m-d', strtotime($data['data_inicio'])) : now();
        $data_fim = date('Y-m-d', strtotime($data['data_fim']));
    
        if ($data_inicio >= $data_fim) {
            throw new AppError('Class end date should be later than the start date', 401);
        }
    
        return Turmas::create([
            'codigo' => $data['codigo'],
            'data_inicio' => $data_inicio, // Correção aqui: 'data_inicio' em vez de 'data_incio'
            'data_fim' => $data_fim,
            'quantidade_maxima_alunos' => $data['quantidade_maxima_alunos'],
        ]);
    }
}