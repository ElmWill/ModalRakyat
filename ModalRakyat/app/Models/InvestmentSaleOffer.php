<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvestmentSaleOffer extends Model
{
    use HasFactory;

    protected $table = 'investment_sale_offers';

    protected $primaryKey = 'offerID';

    protected $fillable = [
        'investmentID',
        'sellerInvestorID',
        'buyerInvestorID',
        'askingPrice',
        'sellingPrice',
        'status',
    ];

    protected $casts = [
        'askingPrice' => 'decimal:2',
        'sellingPrice' => 'decimal:2',
    ];
    
    public function getRouteKeyName()
    {
        return 'offerID';
    }

    public function investment()
    {
        return $this->belongsTo(Investment::class, 'investmentID', 'investmentID');
    }

    public function seller()
    {
        return $this->belongsTo(Investor::class, 'sellerInvestorID', 'investorID');
    }

    public function buyer()
    {
        return $this->belongsTo(Investor::class, 'buyerInvestorID', 'investorID');
    }
}
