<?php

namespace Database\Factories;

use App\Models\Chapter;
use App\Models\Comic;
use DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ComicFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comic::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->text($maxNbChars = 50);
        return [
            'name' => $name,
            'another_name' => $this->faker->text($maxNbChars = 50),
            'slug' => Str::slug($name),
            'description' => $this->faker->text($maxNbChars = 300),
            'author_id' => mt_rand(1,50),
            'created_at' => new DateTime,
            'updated_at' => new DateTime,
        ];
    }
    /**
     * Configure the model factory.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterCreating(function (Comic $comic) {
            // tao avatar cho truyen
            $url = 'https://source.unsplash.com/random/190x247';
            $comic
                ->addMediaFromUrl($url)
                ->toMediaCollection('comic');

            // sinh mang ngau nhien de them category
            $category = [];
            for ($i = 0; $i < mt_rand(4, 12); $i++) {
                $category[$i] = mt_rand(1, 52);
            }
            $comic->categories()->attach($category);

            // them chap vào comic
            for ($i = 0; $i < mt_rand(2, 5); $i++) {
                $comic->chapters()->create()->addMediaFromUrl('https://source.unsplash.com/random/840x1200')
                    ->toMediaCollection('chapter');
            }

            // khoi tao bang thong ke
            $comic->statistical()->create();

            // tao slider
            $comic->slider()->create()->addMediaFromUrl('https://source.unsplash.com/random/583x386')
                ->toMediaCollection('slider');
        });
    }
}
