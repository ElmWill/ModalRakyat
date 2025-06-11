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
        Schema::create('investments', function (Blueprint $table) {
            $table->id('investmentID');
            $table->decimal('amountInvested', 15, 2);
            $table->timestamp('investmentDate')->useCurrent();
            $table->string('status')->default('pending_payment'); // Status investasi: pending_payment, active, completed, failed, cancelled
            $table->decimal('investmentPercentage', 7, 4);
            $table->decimal('expectedReturn', 15, 2);
            $table->decimal('actualReturnReceived', 15, 2)->nullable()->default(0);

            $table->foreignId('projectID')->constrained('umkm_projects', 'projectID')->onDelete('restrict');
            $table->foreignId('investorID')->constrained('investors', 'investorID')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('investments');
    }
};
