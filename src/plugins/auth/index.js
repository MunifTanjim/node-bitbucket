const beforeRequest = require('./before-request.js')
const validateOptions = require('./validate-options')

function authPlugin(client, clientOptions) {
  if (!clientOptions.auth) return

  validateOptions(clientOptions.auth)

  const state = {
    client,
    auth: clientOptions.auth
  }

  client.hook.before('request', beforeRequest.bind(null, state))
}

module.exports = authPlugin
