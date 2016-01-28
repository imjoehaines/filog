<?php

use Monolog\Logger;
use Slim\Views\PhpRenderer;
use Monolog\Handler\StreamHandler;
use Monolog\Processor\UidProcessor;
use Monolog\Processor\WebProcessor;

$container = $app->getContainer();

$container['view'] = function ($container) {
    $settings = $container->get('settings')['view'];

    return new PhpRenderer($settings['path']);
};

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
    $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    return $database;
};
