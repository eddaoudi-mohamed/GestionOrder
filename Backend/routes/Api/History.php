<?php

use App\Http\Controllers\HistoryController;
use Illuminate\Support\Facades\Route;

Route::group([
    "middleware" => "auth.admin:api",
    'prefix' => 'histories'
], function () {
    Route::get('/{entity}', [HistoryController::class, "index"]);
    Route::post('/delete/{id}', [HistoryController::class, "delete"]);
    Route::get('/search/{entity}', [HistoryController::class, "search"]);
});
