<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dividend extends Model
{
    protected $fillable = ['project_id', 'investor_id', 'amount', 'note'];
}
