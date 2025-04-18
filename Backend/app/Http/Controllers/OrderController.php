<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Jobs\OrderJob;
use App\Models\Product;
use App\Jobs\HistoryJob;
use Illuminate\Http\Request;
use App\Traits\GeneraleTrait;
use App\Jobs\UpdateQuantProduct;
use App\Http\Resources\OrderResource;
use App\Http\Resources\OrderListResource;
use App\Jobs\RmProductFrOrder;
use Illuminate\Database\Console\Migrations\StatusCommand;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    use GeneraleTrait;
    public function index()
    {
        try {
            $orders = Order::where("status", '!=', "deleted")->with("client")->paginate(10);
            return OrderResource::collection($orders);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["message" => "Internal Server Error"]], 500);
        }
    }


    public function show($id)
    {
        try {
            $order = Order::where("id", $id)->where("status", '!=', "deleted")->firstOrFail();
            return new OrderListResource($order);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found "]], 404);
        }
    }

    public function store(Request $request)
    {
        try {

            $rules = [
                'client_id' => "required|exists:clients,id",
                "paid" => "numeric",
                'products' => 'required|array|min:1', // Ensure 'products' is an array with at least one item
                'products.*' => 'required|array', // Each item in 'products' must be an array
                'products.*.product_id' => 'required|exists:products,id', // Each product must have a 'name' field
                'products.*.quantity' => 'required|integer|min:1', // Each product must have a 'quantity' field
            ];
            $data =  $request->only(["client_id", "paid", "status", "products"]);
            $validator = Validator::make($data, $rules);

            if ($validator->fails()) {
                return $this->errorResponse(["data" => ["messages" => $validator->messages()]], 400);
            }
            $order_list = $data['products'];
            unset($data['products']);
            $dataOrderList = [];
            $amount = 0;
            foreach ($order_list as $key => $value) {
                $product = $this->validateProduct($value);
                $dataOrderList[number_format($value['product_id'])] = $product;
                $amount += $product['totale'];
            }

            $data['amount'] = $amount;
            $data  = $this->validateStatusOrder($data);

            // return [...$data, "products" => $dataOrderList];
            OrderJob::dispatch([...$data, "products" => $dataOrderList]);

            // UpdateQuantProduct::dispatch("pending", $id);

            $order = Order::create($data);
            $order->products()->attach($dataOrderList);

            HistoryJob::dispatch([
                'action_type' => 'created',
                'entity_type' => 'Order',
                'initiator' => 'admin',
                'details' => ['code' => $order->code, 'clientname' => $order->client->name],
            ]);
            return $this->successfulResponse(['data' => ["message" => "Order Created successfuly"]]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["message" => "Internal Server Error" . $th->getMessage()]], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $order = Order::where("id", $id)->where("status", '!=', "deleted")->firstOrFail();
            RmProductFrOrder::dispatch(['status' => $order->status, 'products' => $order->products]);
            $rules = [
                "paid" => "numeric",
                'products' => 'required|array|min:1', // Ensure 'products' is an array with at least one item
                'products.*' => 'required|array', // Each item in 'products' must be an array
                'products.*.product_id' => 'required|exists:products,id', // Each product must have a 'name' field
                'products.*.quantity' => 'required|integer|min:1', // Each product must have a 'quantity' field
            ];
            $data =  $request->only(["paid", "products"]);
            $validator = Validator::make($data, $rules);

            if ($validator->fails()) {
                return $this->errorResponse(["data" => ["messages" => $validator->messages()]], 400);
            }
            $order_list = $data['products'];
            unset($data['products']);
            $dataOrderList = [];
            $amount = 0;
            foreach ($order_list as $key => $value) {
                $product = $this->validateProduct($value);
                $dataOrderList[number_format($value['product_id'])] = $product;
                $amount += $product['totale'];
            }

            $data['amount'] = $amount;
            $data  = $this->validateStatusOrder($data);

            // return [...$data, "products" => $dataOrderList];
            OrderJob::dispatch(['status' => $order->status, "products" => $dataOrderList]);

            $order->update($data);
            $order->products()->sync($dataOrderList);
            HistoryJob::dispatch([
                'action_type' => 'updated',
                'entity_type' => 'Order',
                'initiator' => 'admin',
                'details' => ['code' => $order->code, 'clientname' => $order->client->name],
            ]);
            return $this->successfulResponse(['data' => ["message" => "Order Update successfuly"]]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found "]], 404);
        }
    }

    public function delete($id)
    {
        try {
            $order = Order::where("id", $id)->where("status", '!=', "deleted")->firstOrFail();
            if ($order->status == "refunded" or $order->status == "voided") {
                $order->update(['status' => "deleted"]);
                HistoryJob::dispatch([
                    'action_type' => 'deleted',
                    'entity_type' => 'Order',
                    'initiator' => 'admin',
                    'details' => ['code' => $order->code, 'clientname' => $order->client->name],
                ]);
                return $this->successfulResponse(['data' => ["message" => "Order delete successfuly"]]);
            }
            return $this->errorResponse(["data" => ["messages" => "can't delete this order"]], 400);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found "]], 404);
        }
    }

    public function search(Request $request)
    {

        if ($request->has("query")) {
            try {
                $query = $request->get("query");
                $orders  = Order::search($query)->paginate(10);
                HistoryJob::dispatch([
                    'action_type' => 'searched',
                    'entity_type' => 'Order',
                    'initiator' => 'admin',
                    'details' => ['query' => $query],
                ]);
                return OrderResource::collection($orders);
            } catch (\Throwable $th) {
                return $this->errorResponse(["data" => ["message" => "Internal Server Error " . $th->getMessage()]], 500);
            }
        }
        return $this->errorResponse(["data" => ["messages" => "error query not send"]], 400);
    }


    public function paid(Request $request, $id)
    {

        try {
            $order = Order::where("id", $id)->where("status", '!=', "deleted")->where("status", '!=', "paid")->firstOrFail();

            $rules = [
                "paid" => "numeric|min:1",
            ];
            $data = $request->only(['paid']);

            $validator = Validator::make($data, $rules);
            if ($validator->fails()) {
                return $this->errorResponse(["data" => ["messages" => $validator->messages()]], 400);
            }
            $status = "pending";
            $paid = $data['paid'] + $order->paid;
            if ($paid > $order->amount) {
                return $this->errorResponse(["data" => ["messages" => "the amount enter greater than amount of order"]], 400);
            } elseif ($paid < $order->amount) {
                $status = $order->status;
                $order->update(['status' => "partially_paid", 'paid' => $paid]);
            } else {
                $status = $order->status;
                $order->update(['status' => "paid", 'paid' => $paid]);
            }
            if ($status != "paid" and $status != "partially_paid") {
                // UpdateQuantProduct::dispatch($id, "pending");
                UpdateQuantProduct::dispatch("pending", $id);
            }
            HistoryJob::dispatch([
                'action_type' => 'paid',
                'entity_type' => 'Order',
                'initiator' => 'admin',
                'details' => [
                    'code' => $order->code, 'clientname' => $order->client->name,
                    'paid' => $data['paid']
                ],
            ]);
            return $this->successfulResponse(['data' => ["message" => "payement successfuly"]]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found "]], 404);
        }
    }

    public  function refunded(Request $request, $id)
    {
        try {
            $order = Order::where("id", $id)->where("status", '!=', "deleted")
                ->where("status", '!=', "refunded")
                ->firstOrFail();
            $rules = [
                "refunde" => "numeric|min:0",
            ];
            $data = $request->only(['refunde']);

            $validator = Validator::make($data, $rules);
            if ($validator->fails()) {
                return $this->errorResponse(["data" => ["messages" => $validator->messages()]], 400);
            }
            $status = "pending";
            $refunde =  $data['refunde'];
            if ($order->paid > $refunde) {
                $status = $order->status;
                $paid = $order->paid - $refunde;
                $order->update(['status' => "partially_refunded", "paid" => $paid]);
            } elseif ($order->paid == $refunde) {
                $paid = 0;
                $status = $order->status;
                $order->update(['status' => "refunded", "paid" => $paid]);
            } else {
                $paid = 0;
                $status = $order->status;
                $order->update(['status' => "refunded", "paid" => $paid]);
            }



            if ($status === 'pending') {
                UpdateQuantProduct::dispatch("pendingRefunded", $id);
            } elseif ($status == "partially_paid" or $status == "paid") {
                UpdateQuantProduct::dispatch("paidRefunded", $id);
            }
            HistoryJob::dispatch([
                'action_type' => 'refunded',
                'entity_type' => 'Order',
                'initiator' => 'admin',
                'details' => [
                    'code' => $order->code, 'clientname' => $order->client->name,
                    'refunde' => $data['refunde']
                ],
            ]);
            return $this->successfulResponse(['data' => ["message" => "Order refunded successfuly"]]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found "]], 404);
        }
    }

    public function validateProduct($data)
    {
        $id = $data['product_id'];
        $quantity = $data['quantity'];
        try {
            $product = Product::where("id", $id)
                ->where("statusExiste", "existe")
                ->firstOrFail();
            if ($quantity  > $product->unitsInStock) {
                return $this->errorResponse(["data" => ["messages" => "invalid quantity for " . $product->name]], 404);
            }
            $price = $product->price;

            $totale = $price * $quantity;
            return [
                'price' => $price,
                'quantity' => $quantity,
                "totale" => $totale
            ];
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found "]], 404);
        }
    }

    public function validateStatusOrder($data)
    {
        if ($data['paid'] > 0 && $data['paid'] != $data['amount']) {
            $data['status'] = 'partially_paid';
        } elseif ($data['paid'] == $data['amount']) {
            $data['status'] = 'paid';
        } else {
            $data['status'] = 'pending';
        }

        return $data;
    }

    public function delivered($id)
    {
        try {
            $order = Order::where("id", $id)->where("status", '!=', "deleted")
                ->where("status", '!=', "refunded")
                ->where("status", '!=', "partially_refunded")
                ->where("status", '!=', "voided")
                ->where("status", '!=', "unpaid")
                ->where("status", '!=', "delivered")
                ->firstOrFail();
            HistoryJob::dispatch([
                'action_type' => 'delivered',
                'entity_type' => 'Order',
                'initiator' => 'admin',
                'details' => [
                    'code' => $order->code, 'clientname' => $order->client->name,
                ],
            ]);
            $order->update(['status' => 'delivered']);
            return $this->successfulResponse(['data' => ["message" => "Order delivered successfuly"]]);
        } catch (\Throwable $th) {

            return $this->errorResponse(["data" => ["messages" => "Not Found "]], 404);
        }
    }
}
