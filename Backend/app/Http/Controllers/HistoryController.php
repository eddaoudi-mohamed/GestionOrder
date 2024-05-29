<?php

namespace App\Http\Controllers;

use App\Http\Resources\HistoryResource;
use Carbon\Carbon;
use App\Models\History;
use Illuminate\Http\Request;
use App\Traits\GeneraleTrait;

class HistoryController extends Controller
{
    use GeneraleTrait;

    public function index($entity)
    {
        try {
            $histories = History::where("entity_type",  $entity)->get();

            $histories = $histories->groupBy(function ($record) {
                $carbonDate = Carbon::parse($record->created_at);
                if ($carbonDate->isToday()) {
                    return 'Today';
                }
                if ($carbonDate->isYesterday()) {
                    return 'Yesterday';
                }
                return $carbonDate->format('Y-m-d');
            })->sortByDesc(function ($group, $date) {
                return strtotime($date);
            });

            $histories = $histories->map(function ($group) {
                return $group->map(function ($record) {
                    $record->date = $record->created_at->format('H:i');
                    return $record;
                });
            });

            // Return the modified collection
            return $this->successfulResponse(["data" => $histories]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "the entity type not right  "]], 400);
        }
    }

    public function delete($id)
    {
        try {
            $history = History::findOrFail($id);
            $history->delete();
            return $this->successfulResponse(['data' => ["message" => "History Deleted successfuly"]]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found"]], 404);
        }
    }

    public function search(Request $request, $entity)
    {
        if ($request->has("query")) {
            try {
                $query = $request->get("query");
                $histories = History::search($query)
                    ->get()
                    ->filter(function ($history) use ($entity) {
                        return $history->entity_type === $entity;
                    });

                return HistoryResource::collection($histories);
            } catch (\Throwable $th) {
                return $this->errorResponse(["data" => ["message" => "Internal Server Error " . $th->getMessage()]], 500);
            }
        }
        return $this->errorResponse(["data" => ["messages" => "error query not send"]], 400);
    }
}
