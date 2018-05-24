const authenticate = require('./authenticate')
const beforeRequest = require('./before-request')

class AuthenticationPlugin {
  constructor(BitBucket) {
    this.core = BitBucket
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
