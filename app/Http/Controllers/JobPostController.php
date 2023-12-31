<?php

namespace App\Http\Controllers;

use App\Models\JobPost;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class JobPostController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('JobPost/Index', [
            'jobPosts' => JobPost::with('user')->latest()->paginate(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('JobPost/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => ['required'],
            'description' => ['required', 'min:10'],
            'location' => ['required'],
            'salary' => ['required'],
            'type' => ['required'],
            'benefits' => ['required', 'min:10'],
            'requirements' => ['required', 'min:10'],
        ]);

        $request->user()->jobPosts()->create($request->only('title', 'description', 'location', 'salary', 'type', 'benefits', 'requirements'));

        return Redirect::route('job.my-job')->with('status', 'JobPost created successfully.');
    }

    public function myJobPosts(): Response
    {
        return Inertia::render('JobPost/MyJobPosts', [
            'jobPosts' => JobPost::with('user')->where('user_id', auth()->user()->id)->latest()->paginate(),
        ]);
    }

    public function show(JobPost $jobPost): Response
    {
        return Inertia::render('JobPost/Show', [
            'jobPost' => $jobPost->load('user'),
        ]);
    }

    public function edit(JobPost $jobPost): Response
    {
        return Inertia::render('JobPost/Edit', [
            'jobPost' => $jobPost->load('user'),
        ]);
    }

    public function update(Request $request, JobPost $jobPost): RedirectResponse
    {
        $request->validate([
            'title' => ['required'],
            'description' => ['required', 'min:10'],
            'location' => ['required'],
            'salary' => ['required'],
            'type' => ['required'],
            'benefits' => ['required', 'min:10'],
            'requirements' => ['required', 'min:10'],
        ]);

        $jobPost->update($request->only('title', 'description', 'location', 'salary', 'type', 'benefits', 'requirements'));

        return Redirect::route('job.my-job')->with('status', 'JobPost updated successfully.');
    }

    public function destroy(JobPost $jobPost): RedirectResponse
    {
        $jobPost->delete();

        return Redirect::route('job.my-job')->with('status', 'JobPost deleted successfully.');
    }

    public function getAvailableJobs(): Response
    {
        $jobPosts = JobPost::with('user')->whereDoesntHave('applications', function ($query) {
            $query->where('user_id', auth()->user()->id);
        })->latest()->paginate();

        return Inertia::render('JobPost/AvailableJobs', [
            'jobPosts' => $jobPosts,
        ]);
    }
}
