<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Investor extends Model
{
    use HasFactory;

    protected $table = 'investors';
    protected $primaryKey = 'investorID';
    public $incrementing = true;
    protected $fillable = [
        'userID',
        'bankAccountNumber',
        'bankName',
        'accountHolderName',
        'identityCardNumber',
        'identityCardScanURL',
        'taxIDNumber',
        'investmentPreferences',
        'riskProfile',
        'totalInvestedAmount',
        'currentInvestmentValue',
        'availableBalance',
    ];
    protected $casts = [
        'investmentPreferences' => 'array',
        'totalInvestedAmount' => 'decimal:2',
        'currentInvestmentValue' => 'decimal:2',
        'availableBalance' => 'decimal:2',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'userID', 'userID');
    }

    public function investments()
    {
        return $this->hasMany(Investment::class, 'investorID', 'investorID');
    }
}
