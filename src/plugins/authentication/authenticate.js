/**
 * Updates Authentication State
 * @param {Object} state - Authentication State
 * @param {Object} options
 */
const authenticate = (state, options = {}) => {
  if (!options.type) {
    state.auth = false
    return
  }

  switch (options.type) {
    case 'basic':
    case 'apppassword':
      if (!options.username || !options.password) {
        throw new Error(
          'Basic authentication requires both a username and password to be set'
        )
      }
      break

    case 'oauth':
      if (!options.token && !(options.key && options.secret)) {
        throw new Error(
          'OAuth2 authentication requires a token or key & secret to be set'
        )
      }
      break

    case 'token':
      if (!options.token) {
        throw new Error('Token authentication requires a token to be set')
      }
      break

    default:
      throw new Error(
        "Invalid authentication type, must be 'basic', 'oauth' or 'token'"
      )
  }

  state.auth = options
}

module.exports = authenticate
