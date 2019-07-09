const ROUTES = require('./routes.json')

function registerApiEndpointsPlugin(client) {
  client.registerEndpoints(ROUTES)
}

module.exports = registerApiEndpointsPlugin
