<?php

use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Processor\UidProcessor;
use Monolog\Processor\WebProcessor;

$container = $app->getContainer();

// monolog
$container['logger'] = function ($container) {
    $settings = $container->get('settings')['logger'];

    $logger = new Logger($settings['name']);
    $logger->pushProcessor(new UidProcessor());
    $logger->pushProcessor(new WebProcessor());
    $logger->pushHandler(new StreamHandler($settings['path'], Logger::DEBUG));

    return $logger;
};

$container['database'] = function ($container) {
    $settings = $container->get('settings')['database'];

    $database = new PDO('sqlite:' . $settings['path']);

    return $database;
};
