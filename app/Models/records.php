<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class records extends Model
{
    use HasFactory;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'cash_in',
        'cash_out',
        'deposited',
        'in_hand_cash',
        'remark',
        'record_date',
        'site_id',
    ];
}
