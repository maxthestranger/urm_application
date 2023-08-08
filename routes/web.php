<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\JobPostController;
use App\Http\Controllers\ProfileController;
use App\Models\JobPost;
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
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'jobs' => JobPost::with('user')->where('is_approved', false)->latest()->take(10)->get(),
        'jobCountAll' => JobPost::count(),
        'jobCountApproved' => JobPost::where('is_approved', true)->count(),
        'jobCountPending' => JobPost::where('is_approved', false)->count(),
        'myJobs' => JobPost::with('user')->where('user_id', auth()->user()->id)->latest()->take(10)->get(),
    ]);
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
Route::get('/jobs/{jobPost}/edit', [JobPostController::class, 'edit'])->middleware(['auth', 'verified'])->name('job.edit');
Route::patch('/jobs/{jobPost}', [JobPostController::class, 'update'])->middleware(['auth', 'verified'])->name('job.update');
Route::delete('/jobs/{jobPost}', [JobPostController::class, 'destroy'])->middleware(['auth', 'verified'])->name('job.destroy');
Route::get('/available-positions', [JobPostController::class, 'getAvailableJobs'])->middleware(['auth', 'verified'])->name('job.available-positions');

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
Route::delete('/applications/{application}', [ApplicationController::class, 'destroy'])->middleware(['auth', 'verified'])->name('application.destroy');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::patch('/candidate', [ProfileController::class, 'updateCandidateProfile'])->middleware(['auth', 'verified'])->name('candidate.update');

require __DIR__.'/auth.php';
