<?php

use Illuminate\Support\Facades\Route;

Route::get('clients', function () {
    return response()->json("client in here ");
});
