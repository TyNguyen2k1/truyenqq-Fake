<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Ty Nguyen',
            'email' => 'nguyenvantybg01@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('111111111'),
            'remember_token' => Str::random(10),
            'created_at' => new DateTime,
            'updated_at' => new DateTime
        ]);
    }
}