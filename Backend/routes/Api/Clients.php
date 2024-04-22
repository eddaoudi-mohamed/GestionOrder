<?php

use App\Http\Controllers\ClientController;
use Illuminate\Support\Facades\Route;



Route::group(["middleware" => "auth.admin:api", "prefix" => "clients"], function () {
    Route::get("/", [ClientController::class, "index"]);
    Route::get("/{id}", [ClientController::class, "show"]);
    Route::post("/store", [ClientController::class, "store"]);
    Route::post("/update/{id}", [ClientController::class, "update"]);
    Route::post("/delete/{id}", [ClientController::class, "update"]);
    Route::post("/search", [ClientController::class, "search"]);
});
