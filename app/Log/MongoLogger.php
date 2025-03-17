<?php

namespace App\Log;

use MongoDB\Client;
use Monolog\Handler\MongoDBHandler;
use Monolog\Logger;

class MongoLogger
{
    public function __invoke(array $config): Logger
    {
        $mongodb = new Client(config('database.connections.mongodb.dsn'));
        
        $handler = new MongoDBHandler(
            mongodb: $mongodb,
            database: config('database.connections.mongodb.database'),
            collection: 'logs'
        );

        return new Logger(
            env('APP_NAME'),
            [$handler]
        );
    }
}
