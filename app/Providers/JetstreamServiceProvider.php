<?php

namespace App\Providers;

use App\Actions\Jetstream\DeleteUser;
use Illuminate\Support\ServiceProvider;
use Laravel\Fortify\Fortify;
use Laravel\Jetstream\Jetstream;

class JetstreamServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->configurePermissions();

        // sửa lại view user
        Jetstream::deleteUsersUsing(DeleteUser::class);
        Fortify::loginView(function () {
            // return (new \App\Http\Controllers\HomeController)->index()->with('login', 'is-active');
            return redirect()->route('home');
        });
        Fortify::requestPasswordResetLinkView(function () {
            // return (new \App\Http\Controllers\HomeController)->index()->with('forgotPassword', 'is-active');
            return redirect()->route('home');

        });
        Fortify::registerView(function () {
            // return (new \App\Http\Controllers\HomeController)->index()->with('register', 'is-active');
            return redirect()->route('home');
        });
    }

    /**
     * Configure the permissions that are available within the application.
     *
     * @return void
     */
    protected function configurePermissions()
    {
        Jetstream::defaultApiTokenPermissions(['read']);

        Jetstream::permissions([
            'create',
            'read',
            'update',
            'delete',
        ]);
    }
}
