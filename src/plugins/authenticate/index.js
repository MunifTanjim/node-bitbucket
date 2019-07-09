const authenticate = require('./authenticate')
const beforeRequest = require('./before-request')

function authenticatePlugin(client, clientOptions) {
  if (clientOptions.auth) return

  const state = {
    client,
    auth: false
  }

  client.authenticate = authenticate.bind(null, state)
  client.hook.before('request', beforeRequest.bind(null, state))
}

module.exports = authenticatePlugin
