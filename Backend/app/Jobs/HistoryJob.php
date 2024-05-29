<?php

namespace App\Jobs;

use App\Models\History;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class HistoryJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     * @param history array
     */
    private array $history;
    public function __construct(array $history)
    {
        $this->history = $history;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {

        History::create($this->history);
    }
}
