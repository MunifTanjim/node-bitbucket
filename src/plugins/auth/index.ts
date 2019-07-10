import { beforeRequest } from './before-request.js'
import { validateOptions } from './validate-options'

type APIClient = import('./types').APIClient
type AuthPluginState = import('./types').AuthPluginState
type Options = import('./types').Options

function authPlugin(client: APIClient, clientOptions: Options): void {
  if (!clientOptions.auth) return

  validateOptions(clientOptions.auth)

  const state: AuthPluginState = {
    client,
    auth: clientOptions.auth
  }

  client.requestHook.before(beforeRequest.bind(null, state))
}

export default authPlugin
