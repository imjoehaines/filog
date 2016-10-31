const makeRequest = require('request')

module.exports = (request, reply) => {
  const name = request.params.name

  makeRequest(`http://www.omdbapi.com/?t=${name}&y=&plot=short&r=json`, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      reply(body)
    }
  })
}
