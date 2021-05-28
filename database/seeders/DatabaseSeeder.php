<?php

namespace Database\Seeders;

use App\Models\Comic;
use Database\Factories\ComicFactory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\Author::factory(50)->create();
        $this->call(UserSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(AdminSeeder::class);
        \App\Models\Comic::factory(6)->create();
    }
}
