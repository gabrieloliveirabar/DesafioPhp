<?php 

namespace App\Services\Turmas;

use App\Exceptions\AppError;
use App\Models\Turmas;
use App\Models\User;

class AddUserTurmaService{

    public function execute(array $data){

        $turmaId = $data['turma_id'];
        $alunoId = $data['aluno_id'];

        

        
        $turmaFound = Turmas::find($turmaId);
        if(is_null($turmaFound)) {
            throw new AppError('Turma not found', 404);
        }

        $userFound = User::find($alunoId);
        if(is_null($userFound)) {
            throw new AppError('User not found', 404);
        }

        $numeroAlunosTurma = $turmaFound->alunos->count();
        if($numeroAlunosTurma >= $turmaFound->quantidade_maxima_alunos){
            throw new AppError('Full class of students ', 404);
        }
        
        

        $turma = Turmas::with('alunos')->find($turmaId);
        foreach($turma->alunos as $aluno){
            if($aluno['id'] == $alunoId){
                throw new AppError('User already registered in this class', 404);
            }
        }

        $userFound->turmas()->attach($turmaFound);
        $turmaActualized = Turmas::with('alunos')->find($turmaId);

        return $turmaActualized;
    }

    
}
