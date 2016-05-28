module.exports = db => (request, reply) => {
  db.run(
    'DELETE FROM film WHERE id = $id;',
    { $id: request.params.filmId },
    err => {
      if (err) throw err

      reply({}) // return an empty object so it becomes an empty JSON object so things work and stuff
    }
  )
}
