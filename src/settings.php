<?php
return [
    'settings' => [
        'displayErrorDetails' => true,

        // Monolog settings
        'logger' => [
            'name' => 'filog',
            'path' => __DIR__ . '/../data/app.log',
        ],

        'database' => [
            'path' => __DIR__ . '/../data/db.sq3',
        ],
    ],
];
