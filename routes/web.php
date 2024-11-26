<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\PreferenceController;
use App\Http\Controllers\ProductController; // Añadimos el ProductController
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Página principal
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Rutas del perfil (ya están definidas en tu código)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Rutas para los clientes (ClientController)
Route::resource('clients', ClientController::class)
    ->except(['create', 'edit']); // Excluimos los formularios de creación y edición independientes

// Rutas para las órdenes (OrderController)
Route::resource('orders', OrderController::class)
    ->except(['create', 'edit']); // Excluimos las acciones que no se necesitan para formularios independientes

// Rutas para los detalles de las órdenes (OrderDetailController)
Route::resource('order-details', OrderDetailController::class)
    ->except(['index', 'create', 'edit', 'show']); // Los detalles son gestionados en el contexto de las órdenes

// Rutas para las preferencias de los clientes (PreferenceController)
Route::resource('preferences', PreferenceController::class)
    ->except(['index', 'create', 'show']); // Las preferencias se gestionan dentro del contexto del cliente

// Rutas para los productos (ProductController)
Route::resource('products', ProductController::class)
    ->except(['create', 'edit']); // De nuevo, excluimos los formularios de creación y edición separados

// Rutas de autenticación (mantienes lo que ya tenías)
require __DIR__.'/auth.php';
