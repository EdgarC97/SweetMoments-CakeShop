    <?php

    use App\Http\Controllers\ProfileController;
    use App\Http\Controllers\ClientController;
    use App\Http\Controllers\OrderController;
    use App\Http\Controllers\OrderDetailController;
    use App\Http\Controllers\PreferenceController;
    use App\Http\Controllers\ProductController;
    use Illuminate\Foundation\Application;
    use App\Models\Order;
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
    })->name('welcome');

    // Dashboard
    Route::get('/dashboard', function () {
        // Traemos todas las órdenes con los datos necesarios
        $orders = Order::select('id', 'client_id', 'order_date', 'delivery_date', 'status', 'notes')
            ->with('client:id,name') // Incluye solo los campos que necesites del cliente
            ->get();

        return Inertia::render('Dashboard', [
            'orders' => $orders,
        ]);
    })->name('dashboard');

    // Rutas del perfil (ya están definidas en tu código)
    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    // Rutas para los clientes (ClientController)
    Route::resource('clients', ClientController::class)
        ->except(['create', 'edit'])  // Excluimos los formularios de creación y edición
        ->names([
            'index' => 'clients.index',
            'show' => 'clients.show',
            'store' => 'clients.store',
            'update' => 'clients.update',
            'destroy' => 'clients.destroy',
        ]);

    // Rutas para las órdenes (OrderController)
    Route::resource('orders', OrderController::class)
        ->except(['create', 'edit'])  // Excluimos las acciones que no se necesitan
        ->names([
            'index' => 'orders.index',
            'show' => 'orders.show',
            'store' => 'orders.store',
            'update' => 'orders.update',
            'destroy' => 'orders.destroy',
        ]);

    // Rutas para los detalles de las órdenes (OrderDetailController)
    Route::resource('order-details', OrderDetailController::class)
        ->only(['store', 'update', 'destroy'])  // Solo acciones store, update, destroy
        ->names([
            'store' => 'order-details.store',
            'update' => 'order-details.update',
            'destroy' => 'order-details.destroy',
        ]);

    // Rutas para las preferencias de los clientes (PreferenceController)
    Route::resource('preferences', PreferenceController::class)
        ->only(['store', 'update', 'destroy'])  // Solo acciones store, update, destroy
        ->names([
            'store' => 'preferences.store',
            'update' => 'preferences.update',
            'destroy' => 'preferences.destroy',
        ]);

    // Rutas para los productos (ProductController)
    Route::resource('products', ProductController::class)
        ->except(['create', 'show', 'edit'])
        ->names([
            'index' => 'products.index',
            'show' => 'products.show',
            'store' => 'products.store',
            'update' => 'products.update',
            'destroy' => 'products.destroy',
        ]);

    Route::resource('clients', ClientController::class);
    Route::resource('orders', OrderController::class);

    // Rutas de autenticación
    require __DIR__ . '/auth.php';
