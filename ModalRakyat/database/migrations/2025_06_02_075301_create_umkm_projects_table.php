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
        Schema::create('umkm_projects', function (Blueprint $table) {
            $table->id('projectID');
            $table->foreignId('umkmID')->constrained('umkms', 'umkmID')->onDelete('cascade');
            $table->string('projectName');
            $table->text('projectDescription')->nullable();
            $table->decimal('fundingTarget', 15, 2);
            $table->decimal('amountRaised', 15, 2)->default(0);
            $table->integer('interestRate');
            $table->date('campaignStartDate');
            $table->date('campaignEndDate');
            $table->string('projectStatus')->default('draft'); // draft, pending_approval, active_funding, funded, not_funded, completed
            $table->string('proposalURL');
            $table->string('financialProjectionURL');
            $table->json('projectImageVideoURLs');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('umkm_projects');
    }
};
