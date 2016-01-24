<?php

$settings = require __DIR__ . '/settings.php';

$database = new PDO('sqlite:' . $settings['settings']['database']['path']);

$database->query('DROP TABLE IF EXISTS film;');
$database->query(
    'CREATE TABLE film (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name TEXT,
        date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );'
);
