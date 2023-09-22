<?php
namespace App\Http\Controllers;

use App\Http\Requests\Turmas\{AddUserTurmasRequest, CreateTurmasRequest, DestoryTurmasRequest, PatchTurmasRequest, ShowTurmasRequest};
use App\Models\Turmas;
use App\Services\Turmas\{AddUserTurmaService, CreateTurmasService, DestroyTurmasService, PatchTurmasService, ShowTurmasService};
use Illuminate\Support\Facades\Request;

class TurmasController extends Controller{

    public function create(CreateTurmasRequest $request){

       $CreateTurmasService = new CreateTurmasService();
        
       
       return $CreateTurmasService->execute($request->all());
    }
    public function show(ShowTurmasRequest $request, $id){
        $ShowTurmasService = new ShowTurmasService();
        $turmas = $ShowTurmasService->execute($id);

        return $turmas;
    }
    public function showAll(request $request){
      $turmasComAlunos = Turmas::with('alunos')->get();

      return $turmasComAlunos;
    }
    public function update(PatchTurmasRequest $request,  $id){
        
        $patchTurmasService = new PatchTurmasService();
        $turmas = $patchTurmasService->execute($request->all(), $id);

        return $turmas;

    }

    public function destroy(DestoryTurmasRequest $request, $id){

        $destroyUserService = new DestroyTurmasService();
        $turmas = $destroyUserService->execute($id);

        return $turmas;
    }

    public function addUserTurma(AddUserTurmasRequest $request){

      $addUserTurmaService = new AddUserTurmaService();
      $turmas = $addUserTurmaService->execute($request->all());

      return $turmas;
  }

}