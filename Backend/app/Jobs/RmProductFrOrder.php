<?php

namespace App\Jobs;

use App\Models\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class RmProductFrOrder implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    private array $order;
    public function __construct($order)
    {
        $this->order = $order;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        switch ($this->order['status']) {
            case 'pending':
                foreach ($this->order['products'] as $key => $value) {
                    $product = Product::find($value->id);
                    $unitsOnOrder = $product->unitsOnOrder - $value->pivot->quantity ?? 0;
                    $product->update(['unitsOnOrder' => $unitsOnOrder]);
                }
                break;
            case 'paid':
                foreach ($this->order['products'] as $key => $value) {
                    $product = Product::find($value->id);
                    $quantityInStock = $product->unitsInStock + $value->pivot->quantity;
                    $product->update(["unitsInStock" => $quantityInStock]);
                }
                break;
            case 'partially_paid':
                foreach ($this->order['products'] as $key => $value) {
                    $product = Product::find($value->id);
                    $quantityInStock = $product->unitsInStock + $value->pivot->quantity;
                    $product->update(["unitsInStock" => $quantityInStock]);
                }
                break;

            default:
                foreach ($this->order['products'] as $key => $value) {
                    $product = Product::find($key);
                    $unitsOnOrder = $value['quantity'] + $product->unitsOnOrder ?? 0;
                    $product->update(['unitsOnOrder' => $unitsOnOrder]);
                }
                break;
        }
    }
}
