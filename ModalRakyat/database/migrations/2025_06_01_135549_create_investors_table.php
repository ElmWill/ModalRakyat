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
            $table->string('bankAccountNumber')->nullable()->comment('Nomor rekening bank investor');
            $table->string('bankName')->nullable()->comment('Nama bank investor');
            $table->string('accountHolderName')->nullable()->comment('Nama pemilik rekening bank');
            $table->string('identityCardNumber')->nullable()->unique()->comment('NIK/KTP investor, unik');
            $table->string('identityCardScanURL')->nullable()->comment('URL ke file pindaian KTP/identitas');
            $table->string('taxIDNumber')->nullable()->unique()->comment('NPWP investor, unik');

            $table->json('investmentPreferences')->nullable()->comment('Preferensi investasi dalam format JSON');
            $table->string('riskProfile')->nullable()->comment('Profil risiko investor (misalnya, konservatif, moderat, agresif)');
            $table->decimal('totalInvestedAmount', 15, 2)->default(0)->comment('Akumulasi total dana yang telah diinvestasikan');
            $table->decimal('currentInvestmentValue', 15, 2)->default(0)->comment('Nilai total investasi saat ini');
            $table->decimal('availableBalance', 15, 2)->default(0)->comment('Saldo dana yang tersedia di akun investor');
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
