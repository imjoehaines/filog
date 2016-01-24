<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->get('/', function (Request $request, Response $response, $args) {
    return $this->view->render($response, 'filog.html');
});

$app->post('/add', function (Request $request, Response $response, $args) {
    $parsedBody = $request->getParsedBody();
    $film = $parsedBody['newFilm'];

    $sth = $this->database->prepare('INSERT INTO film (name) VALUES (:name);');
    $sth->execute([':name' => $film]);

    $response = $response->withHeader('Content-type', 'application/json');
    $response->getBody()->write(json_encode([
        'id' => $this->database->lastInsertId(),
    ]));

    return $response;
});

$app->get('/get', function (Request $request, Response $response, $args) {
    $sth = $this->database->prepare('SELECT id, name, date_created FROM film ORDER BY date_created ASC;');
    $sth->execute();

    $films = $sth->fetchAll(PDO::FETCH_ASSOC);

    $response = $response->withHeader('Content-type', 'application/json');
    $response->getBody()->write(json_encode($films));

    return $response;
});
