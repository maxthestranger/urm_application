<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Profile;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'candidate' => $request->user()->profile,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function updateCandidateProfile(Request $request): RedirectResponse
    {
        $request->validate([
            'user_id' => ['required'],
            'phone' => ['required'],
            'address' => ['required'],
            'bio' => ['required'],
            'resume' => ['required'],
            'position_preference' => ['required'],
            'salary_expectation' => ['required'],
            'availability' => ['required'],
            'work_experience' => ['required'],
            'skills' => ['required'],
            'education' => ['required'],
        ]);

        $user = $request->user();

        $profile = $user->profile;

        if($profile == null){
            $profile = new Profile();
        }

        $profile->user_id = $request->user_id;
        $profile->phone = $request->phone;
        $profile->address = $request->address;
        $profile->bio = $request->bio;
        $profile->resume = $request->resume;
        $profile->position_preference = $request->position_preference;
        $profile->salary_expectation = $request->salary_expectation;
        $profile->availability = $request->availability;
        $profile->work_experience = $request->work_experience;
        $profile->skills = $request->skills;
        $profile->education = $request->education;

        $profile->save();

        return Redirect::route('profile.edit');
    }

}
