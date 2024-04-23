<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Traits\GeneraleTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    use GeneraleTrait;
    public function index()
    {
        try {
            $clients = Client::select(['id', 'name', "email", 'phone', 'created_at', 'updated_at'])->where("status", "available")->paginate(10);
            return $this->successfulResponse(["data" => $clients]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["message" => "Internal Server Error"]], 500);
        }
    }

    public function show($id)
    {
        try {
            $client = Client::select(['id', 'name', "email", 'phone', 'created_at', 'updated_at'])->where("id", $id)->where("status", "available")->firstOrFail();
            return $this->successfulResponse(["data" => $client]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found"]], 404);
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

        Client::create($data);

        return $this->successfulResponse(['data' => ["message" => "Client Created successfuly"]]);
    }

    public function update(Request $request, $id)
    {
        try {

            $client = Client::findOrFail($id);
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
            return $this->successfulResponse(['data' => ["message" => "Client Updated successfuly"]]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found"]], 404);
        }
    }


    public function delete($id)
    {
        try {
            $client = Client::where('id', $id)
                ->where('status', 'available')
                ->firstOrFail();
            $client->update(["status" => "unavailable"]);
            return $this->successfulResponse(['data' => ["message" => "Client Deleted successfuly"]]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found"]], 404);
        }
    }

    public function search(Request $request)
    {
    }
}
