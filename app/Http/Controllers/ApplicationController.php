<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ApplicationController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Application/Index', [
            'applications' => Application::with('user', 'jobPost')->latest()->paginate(),
        ]);
    }

    public function myApplications(): Response
    {
        return Inertia::render('Application/MyApplications', [
            'applications' => Application::with('user', 'jobPost')->where('user_id', auth()->user()->id)->latest()->paginate(),
        ]);
    }

    public function apply(Request $request): RedirectResponse
    {
        $request->validate([
            'job_post_id' => ['required'],
        ]);

        $application = Application::where('user_id', auth()->user()->id)->where('job_post_id', $request->job_post_id)->first();

        if ($application) {
            return Redirect::route('job.available-positions')->with('status', 'You have already applied for this job.');
        }

        Application::create([
            'user_id' => auth()->user()->id,
            'job_post_id' => $request->job_post_id,
            'status' => 'pending',
        ]);

        return Redirect::route('application.my-application')->with('status', 'Application submitted successfully.');
    }

    public function approve(Request $request): RedirectResponse
    {
        $request->validate([
            'application_id' => ['required'],
        ]);

        $application = Application::find($request->application_id);

        $application->update([
            'status' => 'approved',
        ]);

        return Redirect::route('application.index')->with('status', 'Application approved successfully.');
    }

    public function reject(Request $request): RedirectResponse
    {
        $request->validate([
            'application_id' => ['required'],
        ]);

        $application = Application::find($request->application_id);

        $application->update([
            'status' => 'rejected',
        ]);

        return Redirect::route('application.index')->with('status', 'Application rejected successfully.');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'application_id' => ['required'],
        ]);

        $application = Application::find($request->application_id);

        $application->delete();

        return Redirect::route('application.index')->with('status', 'Application deleted successfully.');
    }
}
