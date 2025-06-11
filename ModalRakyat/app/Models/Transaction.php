<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $primaryKey = 'transactionID';

    protected $fillable = [
        'userID',
        'investmentID',
        'type',
        'amount',
        'status',
        'gateway_details',
        'description',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'gateway_details' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'userID', 'userID');
    }

    public function investment()
    {
        return $this->belongsTo(Investment::class, 'investmentID', 'investmentID');
    }
}
