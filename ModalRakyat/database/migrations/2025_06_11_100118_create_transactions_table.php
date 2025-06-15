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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id('transactionID');
            $table->foreignId('userID')->constrained('users', 'userID');
            $table->foreignId('investmentID')->constrained('investments', 'investmentID')->nullable()->onDelete('set null');
            $table->string('type');  // Tipe transaksi: deposit, withdrawal, investment_payment, return_payout, fee, etc.
            $table->decimal('amount', 18, 2);
            $table->string('status')->default('pending'); // Status: pending, success, failed, cancelled
            $table->json('gateway_details')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
