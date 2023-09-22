<?php 

namespace App\Services;

use App\Exceptions\AppError;
use App\Models\User;

class ShowUserService{

    public function execute(string $userId){

        $userFound = User::findOrFail($userId);

        if(is_null($userFound)) {
            throw new AppError('User not found', 404);
        }

        return $userFound;
    }

    
}
