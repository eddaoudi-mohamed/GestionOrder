<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Traits\GeneraleTrait;
use App\Http\Resources\ClientResource;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\ClientDetailResource;
use App\Jobs\HistoryJob;

class ClientController extends Controller
{
    use GeneraleTrait;
    public function index()
    {
        try {
            $clients = Client::where("status", "available")->paginate(10);
            return ClientResource::collection($clients);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["message" => "Internal Server Error"]], 500);
        }
    }

    public function show($id)
    {
        try {
            $client = Client::where("id", $id)->where("status", "available")->firstOrFail();
            return new ClientDetailResource($client);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found "]], 404);
        }
    }

    public function store(Request $request)
    {
        $rules = [
            "name" => "required|string",
            "email" => "required|string",
            "phone" => "required|min:9|max:10",
        ];
        $data = $request->only(["name", "email", "phone"]);
        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            return $this->errorResponse(["data" => ["messages" => $validator->messages()]], 400);
        }

        $client = Client::create($data);

        // Client::makeAllSearchable();
        $client->searchable();
        HistoryJob::dispatch([
            'action_type' => 'created',
            'entity_type' => 'Client',
            'initiator' => 'admin',
            'details' => ['name' => $data['name']],
        ]);


        // HistoryJob::dispatch([ 
        //     'action_type'=>'' , 
        //     'entity_type'=>'' , 
        //     'initiator'=>'' , 
        //     'details'=>'' , 
        // ]); 

        return $this->successfulResponse(['data' => ["message" => "Client Created successfuly"]]);
    }

    public function update(Request $request, $id)
    {
        try {

            $client = Client::where('id', $id)
                ->where('status', 'available')
                ->firstOrFail();
            $rules = [
                "name" => "required|string",
                "email" => "required|string",
                "phone" => "required|min:9|max:10",
            ];
            $data = $request->only(["name", "email", "phone"]);
            $validator = Validator::make($data, $rules);
            if ($validator->fails()) {
                return $this->errorResponse(["data" => ["messages" => $validator->messages()]], 400);
            }
            $client->update($data);

            HistoryJob::dispatch([
                'action_type' => 'updated',
                'entity_type' => 'Client',
                'initiator' => 'admin',
                'details' => ['name' => $data['name']],
            ]);
            return $this->successfulResponse(['data' => ["message" => "Client Updated successfuly"]]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found "]], 404);
        }
    }


    public function delete($id)
    {
        try {
            $client = Client::where('id', $id)
                ->where('status', 'available')
                ->firstOrFail();

            $orders = $client->orders;

            if (count($orders) > 0) {
                return $this->errorResponse(["data" => ["messages" => "Can't delete this client"]], 400);
            }

            $client->update(["status" => "unavailable"]);
            HistoryJob::dispatch([
                'action_type' => 'deleted',
                'entity_type' => 'Client',
                'initiator' => 'admin',
                'details' => ['name' => $client->name],
            ]);
            return $this->successfulResponse(['data' => ["message" => "Client Deleted successfuly"]]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found"]], 404);
        }
    }

    public function search(Request $request)
    {
        if ($request->has("query")) {
            $query = $request->get("query");
            $clients  = Client::search($query)->paginate(10);

            HistoryJob::dispatch([
                'action_type' => 'searched',
                'entity_type' => 'Client',
                'initiator' => 'admin',
                'details' => ['query' =>  $query],
            ]);
            return ClientResource::collection($clients);
        }
        return $this->errorResponse(["data" => ["messages" => "error query not send"]], 400);
    }
}
