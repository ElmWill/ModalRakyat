<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UMKMProject extends Model
{
    use HasFactory;

    protected $table = 'umkm_projects';
    protected $primaryKey = 'projectID';

    public $incrementing = true;

    protected $fillable = [
        'umkmID',
        'projectName',
        'projectDescription',
        'fundingTarget',
        'amountRaised',
        'interestRate',
        'campaignStartDate',
        'campaignEndDate',
        'projectStatus',
        'businessPlanURL',
        'financialProjectionURL',
        'projectImageVideoURLs',
    ];

    public function getRouteKeyName(){
        return 'projectID';
    }

    protected $casts = [
        'fundingTarget' => 'decimal:2',
        'amountRaised' => 'decimal:2',
        'interestRate' => 'decimal:2',
        'campaignStartDate' => 'date',
        'campaignEndDate' => 'date',
        'projectImageVideoURLs' => 'array',
    ];

    public function umkm()
    {
        return $this->belongsTo(UMKM::class, 'umkmID', 'umkmID');
    }

    public function investments()
    {
        return $this->hasMany(Investment::class, 'projectID', 'projectID');
    }

    public function watchingInvestor()
    {
        return $this->belongsToMany(
            Investor::class,                  
            'investor_project_watchlist',  
            'projectID',  
            'investorID'  
        );
    }
}
