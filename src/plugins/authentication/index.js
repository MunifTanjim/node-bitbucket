const authenticate = require('./authenticate.js')
const beforeRequest = require('./before-request.js')

class AuthenticationPlugin {
  constructor(apiClient) {
    this.core = apiClient
    this.state = {
      auth: false
    }
  }

  inject() {
    this.core.authenticate = authenticate.bind(null, this.state)
    this.core.hook.before('request', beforeRequest.bind(null, this.state))
  }
}

module.exports = AuthenticationPlugin
