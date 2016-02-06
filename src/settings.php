<?php

return [
    'settings' => [
        'displayErrorDetails' => true,

        'view' => [
            'path' => __DIR__ . '/../src/templates/',
        ],

        'logger' => [
            'name' => 'filog',
            'path' => __DIR__ . '/../data/app.log',
        ],

        'database' => [
            'path' => __DIR__ . '/../data/db.sq3',
        ],
    ],
];
