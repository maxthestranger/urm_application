<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class FeedbackController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Feedback/Index', [
            'feedbacks' => Feedback::with('user')->latest()->paginate(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Feedback/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'content' => ['required', 'min:10'],
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
        ]);

        $request->user()->feedbacks()->create($request->only('content', 'rating'));

        return Redirect::route('feedback.my-feedback')->with('status', 'Feedback created successfully.');
    }

    public function myFeedbacks(): Response
    {
        return Inertia::render('Feedback/MyFeedbacks', [
            'feedbacks' => Feedback::with('user')->where('user_id', auth()->user()->id)->latest()->paginate(),
        ]);
    }
}
