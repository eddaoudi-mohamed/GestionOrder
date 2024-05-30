<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Order;
use App\Models\Client;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\CategoryResource;

// use Illuminate\Http\Request;

class DashboardController extends Controller
{


    public function index()
    {
        $allClient = Client::where("status", "available")->count();
        $allProducts = Product::where("statusExiste", "existe")->count();
        $allOrders = Order::where("status", '!=', "deleted")->count();
        $RevenueTotale = Order::where(function ($query) {
            $query->where('status', 'paid')
                ->orWhere('status', 'delivered')
                ->orWhere('status', 'partially_paid');
        })->sum('amount');


        return [
            "allClient" => $allClient,
            'allProducts' => $allProducts,
            'allOrders' => $allOrders,
            'revenueTotale' => $RevenueTotale,
            'categories' => $this->categoriesGraph(),
            'ProductsMoreSale' => $this->ProductsMoreSale(),
            'topClients' => $this->topClients(),
            'revenuByMonth' => $this->revenuByMonth(),
        ];
    }

    public function categoriesGraph()
    {

        $categories   =  Category::all();
        return CategoryResource::collection($categories);
    }

    public function ProductsMoreSale()
    {
        $products = Product::select('name', DB::raw('quantityPreUnit - unitsInStock as sales'))
            ->orderBy('sales', 'desc')
            ->limit(5) // Add limit here
            ->get()
            ->pluck('sales', 'name'); // Pluck sales with name as key

        return $products;
    }

    public function topClients()
    {
        $topClients = Client::select('clients.*', DB::raw('COUNT(orders.id) as order_count , sum(orders.paid) as paid'))
            ->leftJoin('orders', 'clients.id', '=', 'orders.client_id')
            ->whereIn('orders.status', ['paid', 'partially_paid', 'delivered'])
            ->groupBy('clients.id')
            ->orderByDesc('order_count')
            ->limit(10)
            ->get();

        return $topClients;
    }

    public function revenuByMonth()
    {
        $startDate = Carbon::now()->startOfYear();
        $endDate = Carbon::now();

        // Fetch the total revenue for each month of the current year
        $revenueByMonth = Order::select(DB::raw('MONTH(created_at) as month'), DB::raw('SUM(amount) as total_amount'))
            ->whereIn('status', ['paid', 'partially_paid', 'delivered'])
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy(DB::raw('MONTH(created_at)')) // Group by month number
            ->orderBy('month')
            ->get()
            ->mapWithKeys(function ($item) {
                return [Carbon::create()->month($item->month)->format('F') => $item->total_amount];
            });

        // Fill in missing months with zero revenue
        $months = [];
        while ($startDate->lt($endDate)) {
            $months[$startDate->format('F')] = 0;
            $startDate->addMonth();
        }

        // Merge the fetched revenue with zero revenue for missing months
        $revenueByMonth = collect($months)->merge($revenueByMonth);

        return $revenueByMonth;
    }

    public function statusByDate($date)
    {
        $data = [];
        if ($date == 'today') {
            $startDate = Carbon::today();
            $endDate = Carbon::tomorrow();
            $totalClients = Client::where("status", "available")->whereBetween('created_at', [$startDate, $endDate])->count();
            $totalProducts = Product::where("statusExiste", "existe")->whereBetween('created_at', [$startDate, $endDate])->count();
            $totalOrders = Order::where("status", '!=', "deleted")->whereBetween('created_at', [$startDate, $endDate])->count();

            $sales = Order::whereBetween('created_at', [$startDate, $endDate])
                ->where(function ($query) {
                    $query->where('status', 'paid')
                        ->orWhere('status', 'delivered')
                        ->orWhere('status', 'partially_paid');
                })
                ->count();
            $refunded = Order::where(function ($query) {
                $query->where('status', 'refunded')
                    ->orWhere('status', 'partially_refunded');
            })
                ->whereBetween('created_at', [$startDate, $endDate])
                ->count();
            $revenue = Order::where(function ($query) {
                $query->where('status', 'paid')
                    ->orWhere('status', 'delivered')
                    ->orWhere('status', 'partially_paid');
            })
                ->whereBetween('created_at', [$startDate, $endDate])
                ->sum('amount');
            $data = [
                'countClient' => $totalClients,
                'countProducts' => $totalProducts,
                'countOrder' => $totalOrders,
                'sales' => $sales,
                'refunded' => $refunded,
                'revenue' => $revenue,
            ];
        }
        if ($date == 'month') {
            $startDate = Carbon::now()->startOfMonth();
            $endDate = Carbon::now()->endOfMonth();
            $totalClients = Client::where("status", "available")->whereBetween('created_at', [$startDate, $endDate])->count();
            $totalProducts = Product::where("statusExiste", "existe")->whereBetween('created_at', [$startDate, $endDate])->count();
            $totalOrders = Order::where("status", '!=', "deleted")->whereBetween('created_at', [$startDate, $endDate])->count();

            $sales = Order::whereBetween('created_at', [$startDate, $endDate])
                ->where(function ($query) {
                    $query->where('status', 'paid')
                        ->orWhere('status', 'delivered')
                        ->orWhere('status', 'partially_paid');
                })
                ->count();
            $refunded = Order::where(function ($query) {
                $query->where('status', 'refunded')
                    ->orWhere('status', 'partially_refunded');
            })
                ->whereBetween('created_at', [$startDate, $endDate])
                ->count();
            $revenue = Order::where(function ($query) {
                $query->where('status', 'paid')
                    ->orWhere('status', 'delivered')
                    ->orWhere('status', 'partially_paid');
            })
                ->whereBetween('created_at', [$startDate, $endDate])
                ->sum('amount');
            $data = [
                'countClient' => $totalClients,
                'countProducts' => $totalProducts,
                'countOrder' => $totalOrders,
                'sales' => $sales,
                'refunded' => $refunded,
                'revenue' => $revenue,
            ];
        }
        if ($date == 'year') {
            $startDate = Carbon::now()->startOfYear();
            $endDate = Carbon::now()->endOfYear();
            $totalClients = Client::where("status", "available")->whereBetween('created_at', [$startDate, $endDate])->count();
            $totalProducts = Product::where("statusExiste", "existe")->whereBetween('created_at', [$startDate, $endDate])->count();
            $totalOrders = Order::where("status", '!=', "deleted")->whereBetween('created_at', [$startDate, $endDate])->count();

            $sales = Order::whereBetween('created_at', [$startDate, $endDate])
                ->where(function ($query) {
                    $query->where('status', 'paid')
                        ->orWhere('status', 'delivered')
                        ->orWhere('status', 'partially_paid');
                })
                ->count();
            $refunded = Order::where(function ($query) {
                $query->where('status', 'refunded')
                    ->orWhere('status', 'partially_refunded');
            })
                ->whereBetween('created_at', [$startDate, $endDate])
                ->count();
            $revenue = Order::where(function ($query) {
                $query->where('status', 'paid')
                    ->orWhere('status', 'partially_paid')
                    ->orWhere('status', 'delivered');
            })
                ->whereBetween('created_at', [$startDate, $endDate])
                ->sum('amount');
            $data = [
                'countClient' => $totalClients,
                'countProducts' => $totalProducts,
                'countOrder' => $totalOrders,
                'sales' => $sales,
                'refunded' => $refunded,
                'revenue' => $revenue,
            ];
        }


        return $data;
    }
}
