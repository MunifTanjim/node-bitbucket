function authenticate(state, options) {
  if (!options) {
    state.auth = false
    return
  }

  switch (options.type) {
    case 'apppassword':
    case 'basic':
      if (!options.username || !options.password) {
        throw new Error(
          'Basic authentication requires both a username and password to be set'
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
        "Invalid authentication type, must be 'apppassword', 'basic' or 'token'"
      )
  }

  state.auth = options
}

module.exports = authenticate
