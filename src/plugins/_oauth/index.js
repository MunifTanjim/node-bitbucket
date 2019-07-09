const oAuth2Spec = require('./spec.json')

const routes = require('./routes.js')(oAuth2Spec)

function oAuthPlugin(client) {
  client.registerEndpoints({ oauth: routes })
}

module.exports = oAuthPlugin
