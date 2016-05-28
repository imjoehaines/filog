// TODO validate requests

'use strict'

const Inert = require('inert')
const Hapi = require('hapi')

const db = require('./src/db')

const server = new Hapi.Server()

server.connection({ port: 3000 })
server.register(Inert, () => {}) // TODO should this function actually do something?

server.route({
  method: 'GET',
  path: '/films/',
  handler: require('./src/listFilms')(db)
})

server.route({
  method: 'POST',
  path: '/films/',
  handler: require('./src/addFilm')(db)
})

server.route({
  method: 'DELETE',
  path: '/films/{filmId}',
  handler: require('./src/deleteFilm')(db)
})

server.route({
  method: 'POST',
  path: '/films/{filmId}/rate/{rating}',
  handler: require('./src/rateFilm')(db)
})

// route for static assets
server.route({
  method: 'GET',
  path: '/{file?}',
  handler: {
    directory: {
      path: 'public',
      index: true
    }
  }
})

server.start(err => {
  if (err) throw err

  console.log('Server running at:', server.info.uri)
})
