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
        Schema::create('investment_sale_offers', function (Blueprint $table) {
            $table->id('offerID');
            $table->foreignId('investmentID')->unique()->constrained('investments', 'investmentID')->onDelete('cascade');
            $table->foreignId('sellerInvestorID')->constrained('investors', 'investorID')->onDelete('cascade');
            $table->foreignId('buyerInvestorID')->nullable()->constrained('investors', 'investorID')->onDelete('set null');
            $table->decimal('askingPrice', 15, 2);
            $table->decimal('sellingPrice', 15, 2)->nullable();
            $table->string('status')->default('active'); // Status penawaran: active, sold, cancelled
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('investment_sale_offers');
    }
};
