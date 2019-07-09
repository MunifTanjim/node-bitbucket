const registerEndpoints = require('./register-endpoints')

function registerEndpointsPlugin(client) {
  client.registerEndpoints = registerEndpoints.bind(null, client)
}

module.exports = registerEndpointsPlugin
