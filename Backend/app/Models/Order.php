<?php

namespace App\Models;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;


class Order extends Model
{
    use HasFactory, Searchable;

    protected $fillable = ["client_id", "amount", "paid", "status"];

    protected $attributes = [
        "paid" => 0,
        "status" => "pending"
    ];

    public function searchableAs(): string
    {
        return "orders_index";
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($order) {
            $uuid = Str::uuid();
            $truncated_uuid = substr($uuid, 0, 10);
            $order->code = '#' . $truncated_uuid; // Generate a UUID and prefix with '#'
        });
    }


    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_list', 'order_id', 'product_id')
            ->withPivot('quantity', 'price', 'totale');
    }


    public function client()
    {
        return $this->belongsTo(Client::class);
    }








    public function shouldBeSearchable()
    {
        return $this->status != "deleted";
    }



    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'client_name' => $this->client->name,
        ];
    }
}
