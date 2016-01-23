<?php
return [
    'settings' => [
        'displayErrorDetails' => true,

        // Monolog settings
        'logger' => [
            'name' => 'filog',
            'path' => __DIR__ . '/../logs/app.log',
        ],
    ],
];
