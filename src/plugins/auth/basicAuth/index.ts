import { auth } from './auth.js'
import { beforeRequest } from './before-request.js'
import { validateOptions } from './validate-options'

type APIClient = import('./types').APIClient
type AuthPluginState = import('./types').AuthPluginState
type Options = import('./types').Options
type AuthOptions = import('./types').AuthOptions
type Authentication = import('./types').Authentication

function basicAuth(client: APIClient, clientOptions: Options): void {
  const authStrategy = clientOptions.authStrategy

  if (
    !clientOptions.auth ||
    (authStrategy && authStrategy !== 'basic' && authStrategy !== 'apppassword')
  )
    return

  validateOptions(clientOptions.auth)

  const state: AuthPluginState = {
    client,
    auth: clientOptions.auth,
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  client.auth = (async (authState: AuthOptions): Promise<Authentication> =>
    auth(authState)).bind(null, state.auth)

  client.requestHook.before(beforeRequest.bind(null, state))
}

export default basicAuth
