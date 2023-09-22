<?php 

namespace App\Services\Turmas;

use App\Exceptions\AppError;
use App\Models\Turmas;

class DestroyTurmasService{

    public function execute(string $id){

      Turmas::destroy($id);

        return response()->json(['message' => 'User delete successfully']);
    }

    
}
