<?php

namespace App\Models;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Client extends Model
{
    use HasFactory, Searchable, HasUuids;

    protected $fillable = ["name", "email", "phone", "status"];

    public function searchableAs(): string
    {
        return 'clients_index';
    }

    public function shouldBeSearchable()
    {
        return $this->status == "available";
    }
}
