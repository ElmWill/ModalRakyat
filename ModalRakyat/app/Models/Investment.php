<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Investment extends Model
{
    use HasFactory;

    protected $primaryKey = 'investmentID';

    public $incrementing = true;

    protected $fillable = [
        'projectID',
        'investorID',
        'amountInvested',
        'investmentDate',
        'status',
        'investmentPercentage',
        'expectedReturn',
        'actualReturnReceived',
    ];

    protected $casts = [
        'amountInvested' => 'decimal:2',
        'investmentPercentage' => 'decimal:4', 
        'expectedReturn' => 'decimal:2',
        'actualReturnReceived' => 'decimal:2',
        'investmentDate' => 'datetime',
    ];

    public function umkmProject() 
    {
        return $this->belongsTo(UMKMProject::class, 'projectID', 'projectID');
    }

    public function investor()
    {
        return $this->belongsTo(Investor::class, 'investorID', 'investorID');
    }

}
