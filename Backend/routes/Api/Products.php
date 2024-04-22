<?php

use Illuminate\Support\Facades\Route;

Route::get('Products', function () {
    return response()->json("hello in my labtop");
});
