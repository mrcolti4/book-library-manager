<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Database\Seeders\BookSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class BooksApiControllerTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->artisan('db:seed');
    }

    public static function providePositiveGetDataCases(): iterable
    {
        yield 'With next_cursor' => [
            'cursor' => 'eyJib29rcy5pZCI6MTAsIl9wb2ludHNUb05leHRJdGVtcyI6dHJ1ZX0'
        ];
        yield 'Without next_cursor' => [
            'cursor' => ''
        ];
    }

    #[DataProvider('providePositiveGetDataCases')]
    public function test_get_data_from_api(string $cursor): void
    {
        $response = $this->call(
            method: 'GET',
            uri: 'api/books/all',
            server: ['CONTENT_TYPE' => 'application/json'],
            content: json_encode(['cursor' => $cursor])
        );

        dd($response->json());
    }
}
