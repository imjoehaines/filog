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
    $sth = $this->database->prepare(
        'SELECT id, name, rating, DATE(date_created) AS date_created
           FROM film
       ORDER BY date_created ASC;'
    );

    $sth->execute();

    $films = $sth->fetchAll();

    $films = array_map(function ($film) {
        $film['id'] = (int) $film['id'];
        $film['rating'] = (int) $film['rating'];
        return $film;
    }, $films);

    $response = $response->withHeader('Content-type', 'application/json');
    $response->getBody()->write(json_encode($films));

    return $response;
});

$app->delete('/delete/{id}', function (Request $request, Response $response, $args) {
    $sth = $this->database->prepare('DELETE FROM film WHERE id = :id;');
    $sth->execute([':id' => $args['id']]);

    $response = $response->withHeader('Content-type', 'application/json');
    $response->getBody()->write(json_encode(true)); // react-refetch requires some response

    return $response;
});

$app->post('/rate/{id}/{rating}', function (Request $request, Response $response, $args) {
    $sth = $this->database->prepare('UPDATE film SET rating = :rating WHERE id = :id;');
    $sth->execute([':rating' => $args['rating'], ':id' => $args['id']]);

    $response = $response->withHeader('Content-type', 'application/json');
    $response->getBody()->write(json_encode(true)); // react-refetch requires some response

    return $response;
});
