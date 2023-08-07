<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// about
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// services
Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

// contact
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// contact post
Route::post('/contact', [
    ContactController::class, 'store'
])->name('contact.store');

// contact success
Route::get('/contact/success', function () {
    return Inertia::render('ContactSuccess');
})->name('contact.success');

// feedbacks
Route::get('/feedbacks', [FeedbackController::class, 'index'])->middleware(['auth', 'verified', 'role:admin'])->name('feedback.index');
Route::get('/feedbacks/create', [FeedbackController::class, 'create'])->middleware(['auth', 'verified'])->name('feedback.create');
Route::post('/feedbacks', [FeedbackController::class, 'store'])->middleware(['auth', 'verified'])->name('feedback.store');
Route::get('/my-feedbacks', [FeedbackController::class, 'myFeedbacks'])->middleware(['auth', 'verified'])->name('feedback.my-feedback');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
