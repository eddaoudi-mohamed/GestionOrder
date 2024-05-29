<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HistoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return  [
            'id' => $this->id,
            'action_type' => $this->action_type,
            'entity_type' => $this->entity_type,
            'initiator' => $this->initiator,
            'details' => $this->details,
            'date' => Carbon::parse($this->created_at)->format('d M Y'),
        ];
    }
}
