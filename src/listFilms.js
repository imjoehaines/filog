module.exports = db => (request, reply) => {
  db.all(`
    SELECT id, name, rating, DATE(date_created) AS date_created
    FROM film
    ORDER BY date_created ASC;`,
    [],
    (err, rows) => {
      if (err) throw err

      reply(rows)
    }
  )
}
