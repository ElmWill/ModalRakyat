<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UMKM extends Model
{
    use HasFactory;

    protected $table = 'umkms';

    protected $primaryKey = 'umkmID';

    public $incrementing = true;

    protected $fillable = [
        'userID',
        'businessName',
        'businessType',
        'industrySector',
        'businessDescription',
        'businessAddress',
        'businessPhoneNumber',
        'businessEmail',
        'websiteURL',
        'socialMediaLinks',
        'yearEstablished',
        'numberOfEmployees',
        'businessLogoURL',
        'businessPhotosURLs',
        'legalEntityName',
        'businessLicenseNumber',
        'taxIDNumber',
        'bankAccountNumber',
        'bankName',
        'accountHolderName',
        'umkmProfileStatus',
        'verificationNotes',
        'financialStatementURL',
    ];

    protected $casts = [
        'socialMediaLinks' => 'array',
        'businessPhotosURLs' => 'array',
        'yearEstablished' => 'integer',
        'numberOfEmployees' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'userID', 'userID');
    }

    public function getRouteKeyName(){
        return 'umkmID';
    }

    public function projects()
    {
        return $this->hasMany(UMKMProject::class, 'umkmID', 'umkmID');
    }
}
