<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->streetName(),
            'author' => fake()->name(),
            'published_at' => fake()->year(),
            'poster' => fake()->imageUrl(),
            'pages' => fake()->numberBetween(100, 1000),
        ];
    }
}
