type AuthenticatePluginState = import('./types').AuthenticatePluginState
type AuthenticateOptions = import('./types').AuthenticateOptions

export function authenticate(
  state: AuthenticatePluginState,
  options: AuthenticateOptions
): void {
  if (!options) {
    delete state.auth
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

    case 'jwt':
      if (
        !options.appKey ||
        !options.appClientKey ||
        !options.appSharedSecret
      ) {
        throw new Error(
          'JWT authentication requires an appKey, appClientKey, and appSharedSecret to be set'
        )
      }
      break

    default:
      throw new Error(
        "Invalid authentication type, must be 'apppassword', 'basic', 'token', or 'jwt'"
      )
  }

  state.auth = options
}
