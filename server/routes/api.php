<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::group([
    'middleware' => 'auth:sanctum',//access with middleware with connection
], function () {
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('tags', \App\Http\Controllers\TagsController::class); // Api for the tags
   });

Route::get('/search/{search}', [\App\Http\Controllers\ArticleController::class, 'searchFunction']);//Search for the search Bar
Route::get('/tag/{tagId}', [\App\Http\Controllers\ArticleController::class, 'searchFunctionByTag']);//Search for article by tag
Route::apiResource('articles', \App\Http\Controllers\ArticleController::class); // Api for the articles
