import basicAuth from './basicAuth'
import OAuth from './OAuth'
import oAuth2Spec from './OAuth/spec.json'
import getOAuthRoutes from './OAuth/routes'

type APIClient = import('./types').APIClient
type Options = import('./types').Options

const routes = getOAuthRoutes(oAuth2Spec)
function authenticatePlugin(client: APIClient, clientOptions: Options): void {
  client.registerEndpoints({ oauth: routes.getToken })

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

export default authenticatePlugin
