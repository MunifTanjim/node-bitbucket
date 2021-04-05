import { authenticate } from './authenticate'
import { beforeRequest } from './before-request'

type APIClient = import('./types').APIClient
type AuthenticatePluginState = import('./types').AuthenticatePluginState
type Options = import('./types').Options

function authenticatePlugin(client: APIClient, clientOptions: Options): void {
  if (clientOptions.auth) return

  const state: AuthenticatePluginState = {
    client,
    auth: undefined,
  }

  client.authenticate = authenticate.bind(null, state)
  client.requestHook.before(beforeRequest.bind(null, state))
}

export default authenticatePlugin
