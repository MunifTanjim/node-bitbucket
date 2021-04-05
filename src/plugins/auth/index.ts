import basicAuth from './basicAuth'
import OAuth from './OAuth'

type APIClient = import('./types').APIClient
type Options = import('./types').Options

function authPlugin(client: APIClient, clientOptions: Options): void {
  if (!clientOptions.auth) return

  switch (clientOptions.authStrategy) {
    case 'OAuth':
      OAuth(client, clientOptions)
      break

    default:
      basicAuth(client, clientOptions)
      break
  }
}

export default authPlugin
