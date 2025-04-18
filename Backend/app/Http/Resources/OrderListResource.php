<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class OrderListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $array = parent::toArray($request);
        $array['products'] = $this->products->map(function ($product) {
            $product->image = asset(Storage::url($product->image));
            return $product;
        });
        $array['client'] = $this->client;
        return $array;
    }
}
