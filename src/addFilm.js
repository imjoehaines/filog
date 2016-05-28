module.exports = db => (request, reply) => {
  db.run(
    'INSERT INTO film (name) VALUES ($name);',
    { $name: request.payload.name },
    err => {
      if (err) throw err

      reply({ id: this.lastID })
    }
  )
}
