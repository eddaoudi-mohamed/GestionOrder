<?php

namespace App\Listeners;

use Carbon\Carbon;
use App\Models\Order;
use App\Events\CheckOrderStatusEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CheckOrderStatusListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(CheckOrderStatusEvent $event): void
    {
        $tenDaysAgo = Carbon::now()->subDays(10);

        // Update pending orders older than 10 days to unpaid
        Order::where('status', 'pending')
            ->where('created_at', '<=', $tenDaysAgo)
            ->update(['status' => 'unpaid']);

        // Update unpaid orders older than 10 days to voided
        Order::where('status', 'unpaid')
            ->where('updated_at', '<=', $tenDaysAgo)
            ->update(['status' => 'voided']);
    }
}
