<?php
namespace App\Http\Controllers;

use App\Http\Requests\{CreateUserRequest, DestoryUserRequest, PatchUserRequest, ShowUsersRequest};
use App\Services\{CreateUserService, DestroyUserService, PatchUserService, ShowUserService};
use Illuminate\Support\Facades\Request;

class UserController extends Controller{

    public function create(CreateUserRequest $request){

       $createUserService = new CreateUserService();
       
       return $createUserService->execute($request->all());
    }
    public function show(ShowUsersRequest $request, $id){
        $showUserService = new ShowUserService();
        $user = $showUserService->execute($id);

        return $user;
    }
    public function update(PatchUserRequest $request,  $id){


        
        $patchUserService = new PatchUserService();
        $user = $patchUserService->execute($request->all(), $id);

        return $user;

    }

    public function destroy(DestoryUserRequest $id){

        $destoryUserService = new DestroyUserService();
        $user = $destoryUserService->execute($id);

        return $user;
    }

}