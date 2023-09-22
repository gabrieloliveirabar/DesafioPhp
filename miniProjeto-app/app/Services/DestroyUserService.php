<?php 

namespace App\Services;

use App\Exceptions\AppError;
use App\Models\User;

class DestroyUserService{

    public function execute(string $userId){

        $userFound = User::destroy($userId);

        return response()->json(['message' => 'User delete successfully']);
    }

    
}
