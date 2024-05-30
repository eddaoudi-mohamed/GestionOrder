<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;



Route::group([
    "middleware" => "auth.admin:api",
    "prefix" => "dashboard"
], function () {
    Route::get("/", [DashboardController::class, "index"]);
    Route::get("/statusbydate/{date}", [DashboardController::class, "statusByDate"]);
});
