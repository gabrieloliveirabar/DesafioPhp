<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('turmas', function (Blueprint $table) {
            $table->uuid("id");
            $table->string('codigo')->unique(); 
            $table->date('data_inicio');
            $table->date('data_fim'); 
            $table->integer('quantidade_maxima_alunos')->unsigned(); 
            $table->timestamps(); 

            $table->primary("id");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('turmas');
    }
};
