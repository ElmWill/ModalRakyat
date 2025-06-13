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
        Schema::create('investor_project_favorites', function (Blueprint $table) {
            $table->foreignId('investorID')
                  ->constrained('investors', 'investorID') 
                  ->onDelete('cascade');

            $table->foreignId('projectID')
                  ->constrained('umkm_projects', 'projectID') 
                  ->onDelete('cascade');

            $table->primary(['investorID', 'projectID']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('investor_project_favorites');
    }
};
