<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\HelloController;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    return view('welcome');
});


// Route::get('hello', 'App\Http\Controllers\HelloController@index');
// Route::get('hello', [HelloController::class,'index']);
// Route::get('hello', [HelloController::class,'world_message']);


Route::post('posts', [PostController::class,'store']);
Route::get('posts', [PostController::class, 'index']);
Route::get('posts/create', [PostController::class,'create']);
Route::get('posts/{id}', [PostController::class, 'show']);
Route::get('posts/{id}/edit', [PostController::class, 'edit']);
Route::patch('posts/{id}', [PostController::class, 'edit']);