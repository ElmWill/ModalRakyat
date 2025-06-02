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
        Schema::create('umkms', function (Blueprint $table) {
            $table->id('umkmID');
            $table->foreignId('userID')->unique()->constrained('users', 'userID')->onDelete('cascade');
            $table->string('businessName');
            $table->string('businessType');
            $table->string('industrySector')->nullable();
            $table->text('businessDescription')->nullable();
            $table->string('businessAddress')->nullable();
            $table->string('businessPhoneNumber')->nullable();
            $table->string('businessEmail')->unique();
            $table->string('websiteURL')->nullable();
            $table->json('socialMediaLinks')->nullable();
            $table->year('yearEstablished')->nullable();
            $table->integer('numberOfEmployees')->nullable();
            $table->string('businessLogoURL')->nullable();
            $table->json('businessPhotosURLs')->nullable();
            $table->string('financialStatementURL')->nullable();

            $table->string('legalEntityName');
            $table->string('businessLicenseNumber')->unique();
            $table->string('taxIDNumber')->unique();

            $table->string('bankAccountNumber');
            $table->string('bankName');
            $table->string('accountHolderName');
            
            $table->string('umkmProfileStatus')->default('pending_verification');
            $table->text('verificationNotes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('umkms');
    }
};
