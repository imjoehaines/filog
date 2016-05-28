module.exports = db => (request, reply) => {
  db.run(
    'UPDATE film SET rating = $rating WHERE id = $id;',
    { $rating: request.params.rating, $id: request.params.filmId },
    err => {
      if (err) throw err

      reply('yay') // TODO this could probably be more helpful vOv
    }
  )
}
