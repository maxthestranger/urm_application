<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\JobPostController;
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

// jobs
Route::get('/jobs', [JobPostController::class, 'index'])->middleware(['auth', 'verified'])->name('job.index');
Route::get('/jobs/create', [JobPostController::class, 'create'])->middleware(['auth', 'verified'])->name('job.create');
Route::post('/jobs', [JobPostController::class, 'store'])->middleware(['auth', 'verified'])->name('job.store');
Route::get('/my-jobs', [JobPostController::class, 'myJobPosts'])->middleware(['auth', 'verified'])->name('job.my-job');
Route::get('/jobs/{jobPost}', [JobPostController::class, 'show'])->middleware(['auth', 'verified'])->name('job.show');

// feedbacks
Route::get('/feedbacks', [FeedbackController::class, 'index'])->middleware(['auth', 'verified'])->name('feedback.index');
Route::get('/feedbacks/create', [FeedbackController::class, 'create'])->middleware(['auth', 'verified'])->name('feedback.create');
Route::post('/feedbacks', [FeedbackController::class, 'store'])->middleware(['auth', 'verified'])->name('feedback.store');
Route::get('/my-feedbacks', [FeedbackController::class, 'myFeedbacks'])->middleware(['auth', 'verified'])->name('feedback.my-feedback');

// applications
Route::get('/applications', [ApplicationController::class, 'index'])->middleware(['auth', 'verified'])->name('application.index');
Route::get('/my-applications', [ApplicationController::class, 'myApplications'])->middleware(['auth', 'verified'])->name('application.my-application');
Route::post('/applications', [ApplicationController::class, 'apply'])->middleware(['auth', 'verified'])->name('application.apply');
Route::post('/applications/approve', [ApplicationController::class, 'approve'])->middleware(['auth', 'verified'])->name('application.approve');
Route::post('/applications/reject', [ApplicationController::class, 'reject'])->middleware(['auth', 'verified'])->name('application.reject');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
