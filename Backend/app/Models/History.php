<?php

namespace App\Models;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class History extends Model
{
    use HasFactory, Searchable;

    protected $fillable = ['action_type', "entity_type", "initiator", "details"];
    protected $casts = [
        'details' => 'array',
    ];

    public function searchableAs(): string
    {
        return "history_index";
    }

    public function toSearchableArray(): array
    {
        return $this->toArray();
    }
}
