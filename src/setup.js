const db = require('./db')

db.serialize(() => {
  db.run('DROP TABLE IF EXISTS film;')

  db.run(`
    CREATE TABLE film (
      id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      name TEXT NOT NULL,
      rating INTEGER,
      date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `)
})
