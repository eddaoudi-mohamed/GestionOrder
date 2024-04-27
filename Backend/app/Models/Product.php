<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Product extends Model
{
    use HasFactory, Searchable;
    protected $fillable = [
        'name', 'description', "category_id",
        "quantityPreUnit", "image", "status", "statusExiste",
        "unitsInStock", "unitsOnOrder", "price"
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }


    public function searchableAs(): string
    {
        return 'products_index';
    }

    public function shouldBeSearchable()
    {
        return $this->statusExiste == "existe";
    }



    public function toSearchableArray(): array
    {
        // All model attributes are made searchable
        $array = $this->toArray();

        // Then we add some additional fields
        $array['category'] = $this->category->name;
        return $array;
    }
}
