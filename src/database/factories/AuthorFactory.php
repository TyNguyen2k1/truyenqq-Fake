<?php

namespace Database\Factories;

use App\Models\author;
use DateTime;
use Faker;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class AuthorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = author::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker = Faker\Factory::create();
        $name = $faker->name;
        $name_slug = Str::slug($name);
        return [
            'name' => $name,
            'slug' => $name_slug,
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ];
    }
}