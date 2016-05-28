module.exports = db => (request, reply) => {
  db.run(
    'DELETE FROM film WHERE id = $id;',
    { $id: request.params.filmId },
    err => {
      if (err) throw err

      reply('yay') // TODO this could probably be more helpful vOv
    }
  )
}
