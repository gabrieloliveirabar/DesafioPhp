<?php 

namespace App\Services\Turmas;

use App\Exceptions\AppError;
use App\Models\Turmas;
use App\Models\User;

class ShowTurmasService{

    public function execute(string $id){

        $TurmaFound = Turmas::find($id);

        if(is_null($TurmaFound)) {
            throw new AppError('Turma not found', 404);
        }

        return $TurmaFound;
    }

    
}
