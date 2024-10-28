<?php

use App\Http\Controllers\Admin\DashboardAdminController;
use App\Http\Controllers\Admin\PostAdminController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Author\DashboardAuthorController;
use App\Http\Controllers\Author\PostAuthorController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [AuthController::class, 'index'])->name('login');
Route::post('/login', [AuthController::class, 'authenticate'])->name('auth')->middleware('guest');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

Route::prefix('admin')->middleware('admin')->group(function () {
    Route::get('/dashboard', [DashboardAdminController::class, 'index'])->name('admin.dashboard');

    Route::prefix('post')->group(function () {
        Route::get('/', [PostAdminController::class, 'index'])->name('admin.post');
        Route::get('/create', [PostAdminController::class, 'create'])->name('admin.create.post');
        Route::post('/store', [PostAdminController::class, 'store'])->name('admin.store.post');
        Route::get('/edit/{id}', [PostAdminController::class, 'edit'])->name('admin.edit.post');
        Route::put('/update/{id}', [PostAdminController::class, 'update'])->name('admin.update.post');
        Route::delete('/destroy/{id}', [PostAdminController::class, 'destroy'])->name('admin.destroy.post');
    });

    Route::prefix('user')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('admin.user');
        Route::get('/create', [UserController::class, 'create'])->name('admin.create.user');
        Route::post('/store', [UserController::class, 'store'])->name('admin.store.user');
        Route::get('/edit/{username}', [UserController::class, 'edit'])->name('admin.edit.user');
        Route::put('/update/{username}', [UserController::class, 'update'])->name('admin.update.user');
        Route::delete('/destroy/{id}', [UserController::class, 'destroy'])->name('admin.destroy.user');
    });
});


Route::prefix('author')->middleware('author')->group(function () {
    Route::get('/dashboard', [DashboardAuthorController::class, 'index'])->name('author.dashboard');

    Route::prefix('post')->group(function () {
        Route::get('/', [PostAuthorController::class, 'index'])->name('author.post');
        Route::get('/create', [PostAuthorController::class, 'create'])->name('author.create.post');
        Route::post('/store', [PostAuthorController::class, 'store'])->name('author.store.post');
        Route::get('/edit/{id}', [PostAuthorController::class, 'edit'])->name('author.edit.post');
        Route::put('/update/{id}', [PostAuthorController::class, 'update'])->name('author.update.post');
        Route::delete('/destroy/{id}', [PostAuthorController::class, 'destroy'])->name('author.destroy.post');
    });
});
