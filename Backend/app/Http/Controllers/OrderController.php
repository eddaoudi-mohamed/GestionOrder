<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderListResource;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Traits\GeneraleTrait;
use App\Http\Resources\OrderResource;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    use GeneraleTrait;
    public function index()
    {
        try {
            $orders = Order::where("status", '!=', "deleted")->paginate(10);
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

            $amount = 0;
            foreach ($order_list as $key => $value) {
                $product = $this->validateProduct($value);
                $order_list[$value['product_id']] = $product;
                unset($order_list[$key]);
                $amount += $product['totale'];
            }
            $data['amount'] = $amount;
            $data  = $this->validateStatusOrder($data);

            $order = Order::create($data);
            $order->products()->attach($order_list);
            return $this->successfulResponse(['data' => ["message" => "Order Created successfuly"]]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["message" => "Internal Server Error " . $th->getMessage()]], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $order = Order::where("id", $id)->where("status", '!=', "deleted")->firstOrFail();

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

            $amount = 0;
            foreach ($order_list as $key => $value) {
                $product = $this->validateProduct($value);
                $order_list[$value['product_id']] = $product;
                unset($order_list[$key]);
                $amount += $product['totale'];
            }
            $data['amount'] = $amount;
            $data  = $this->validateStatusOrder($data);

            $order->update($data);
            $order->products()->sync($order_list);
            return $this->successfulResponse(['data' => ["message" => "Order Update successfuly"]]);
        } catch (\Throwable $th) {
            return $this->errorResponse(["data" => ["messages" => "Not Found "]], 404);
        }
    }

    public function delete($id)
    {
        try {
            $order = Order::where("id", $id)->where("status", '!=', "deleted")->firstOrFail();
            if ($order->price > 0) {
                return $this->errorResponse(["data" => ["messages" => "can't delete this order"]], 400);
            }
            $order->update(['status' => "deleted"]);
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
                return OrderResource::collection($orders);
            } catch (\Throwable $th) {
                return $this->errorResponse(["data" => ["message" => "Internal Server Error " . $th->getMessage()]], 500);
            }
        }
        return $this->errorResponse(["data" => ["messages" => "error query not send"]], 400);
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
                return $this->errorResponse(["data" => ["messages" => "invalid quantity"]], 404);
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
}
