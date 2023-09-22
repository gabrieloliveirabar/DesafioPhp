<?php 

namespace App\Services\Turmas;

use App\Exceptions\AppError;
use App\Models\Turmas;

class PatchTurmasService{

    public function execute(array $data, string $id){

        $turmas = Turmas::find($id);
       
        if(!$turmas){
            throw new AppError("usernot exists", 401);
        } 
    
        $data_inicio = isset($data['data_inicio']) ? date('Y-m-d', strtotime($data['data_inicio'])) : $turmas['data_inicio'];
        $data_fim = isset($data['data_fim'])? date('Y-m-d', strtotime($data['data_fim'])) : $turmas['data_fim'] ;
    
        if ($data_inicio >= $data_fim) {
            throw new AppError('Class end date should be later than the start date', 401);
        }

         $updateData = [
            'codigo' =>isset( $data['codigo'])?$data['codigo']: $turmas['codigo'],
            'quantidade_maxima_alunos' =>isset( $data['quantidade_maxima_alunos'])?$data['quantidade_maxima_alunos']: $turmas['quantidade_maxima_alunos'],
            'data_inicio' => $data_inicio,
            'data_fim' => $data_fim ,
          
         ];

        $turmas->update($updateData);
      
        return response()->json(['message' => 'Turma updated successfully']);
    }
}