import basicAuth from './basicAuth'
import OAuth from './OAuth'
import oAuth2Spec from './OAuth/spec.json'
import getOAuthRoutes from './OAuth/routes'

type APIClient = import('./types').APIClient
type Options = import('./types').Options

const routes = getOAuthRoutes(oAuth2Spec)
function authenticatePlugin(client: APIClient, clientOptions: Options): void {
  client.registerEndpoints({ oauth: routes.getToken })

  // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
  //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
  // (2) If only `options.auth` is set, use the default token authentication strategy.
  // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.

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
