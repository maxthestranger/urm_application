<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        Gate::define('access-academia-dashboard', function ($user) {
            return $user->role == 'academia';
        });

        Gate::define('access-recruiter-dashboard', function ($user) {
            return $user->role == 'recruiter';
        });

        Gate::define('access-admin-dashboard', function ($user) {
            return $user->role == 'admin';
        });

        Gate::define('access-candidate-dashboard', function ($user) {
            return $user->role == 'candidate';
        });

        Gate::define('access-dei-dashboard', function ($user) {
            return $user->role == 'dei';
        });
    }
}
