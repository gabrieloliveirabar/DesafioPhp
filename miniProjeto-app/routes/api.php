<?php

use App\Http\Controllers\{AuthController, TurmasController, UserController};
use Illuminate\Support\Facades\Route;

Route::post('/auth/login', [AuthController::class, 'login']);

Route::post('/users', [UserController::class, 'create']);
Route::middleware('jwt.verify')->group(function() {
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::patch('/users/{id}', [UserController::class, 'update']);
    Route::delete('/users/{id}', [UserController::class, 'destroy']);

});
Route::middleware('jwt.verify')->group(function() {
    
    Route::post('/turmas/users', [TurmasController::class, 'addUserTurma']);

});

Route::post('/turmas', [TurmasController::class, 'create']);
Route::get('/turmas/{id}', [TurmasController::class, 'show']);
Route::get('/turmas', [TurmasController::class, 'showAll']);
Route::delete('/turmas/{id}', [TurmasController::class, 'destroy']);
Route::patch('/turmas/{id}', [TurmasController::class, 'update']);
