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
        'proposalURL',
        'financialProjectionURL',
        'projectImageVideoURLs',
    ];

    protected $casts = [
        'fundingTarget' => 'float',
        'amountRaised' => 'float',
        'interestRate' => 'float',
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
        return $this->hasMany(ProposeInvestment::class, 'projectID', 'projectID');
    }

    public function dividends()
    {
        return $this->hasMany(Dividen::class, 'projectID', 'projectID');
    }

    public function fundingProgress()
    {
        return $this->hasMany(FundingProgress::class, 'projectID', 'projectID');
    }

    public function successStories()
    {
        return $this->hasMany(SuccessStory::class, 'projectID', 'projectID');
    }
}
