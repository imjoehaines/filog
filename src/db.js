const sqlite3 = require('sqlite3').verbose()

const dbPath = __dirname + '/../data/db.sq3'

module.exports = new sqlite3.Database(dbPath)
