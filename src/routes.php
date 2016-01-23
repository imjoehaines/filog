<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->get('/', function (Request $request, Response $response, $args) {
    $this->logger->addInfo('aaba');

    $response = $response->withHeader('Content-type', 'application/json');
    $response->getBody()->write(json_encode(['a' => 'b']));

    return $response;
});
