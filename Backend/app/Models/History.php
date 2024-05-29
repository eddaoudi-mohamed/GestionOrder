<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;
    protected $fillable = ['action_type', "entity_type", "initiator", "details"];
    protected $casts = [
        'details' => 'array',
    ];
}
