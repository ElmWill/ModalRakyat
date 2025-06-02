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
        Schema::create('investors', function (Blueprint $table) {
            $table->id('investorID');
            $table->foreignId('userID')->unique()->constrained('users', 'userID')->onDelete('cascade');
            $table->string('bankAccountNumber');
            $table->string('bankName');
            $table->string('accountHolderName');
            $table->string('identityCardNumber')->unique();
            $table->string('identityCardScanURL');
            $table->string('taxIDNumber')->unique();

            $table->json('investmentPreferences')->nullable();
            $table->string('riskProfile')->nullable();
            $table->decimal('totalInvestedAmount', 15, 2)->default(0);
            $table->decimal('currentInvestmentValue', 15, 2)->default(0);
            $table->decimal('availableBalance', 15, 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('investors');
    }
};
