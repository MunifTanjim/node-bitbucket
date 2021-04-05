import { auth } from './auth'
import { beforeHook } from './hook'
import { validateOptions } from './validate-options'

type APIClient = import('./types').APIClient
type AuthPluginState = import('./types').AuthPluginState
type Options = import('./types').Options

const OAuth = (client: APIClient, clientOptions: Options): void => {
  if (!clientOptions.auth || clientOptions.authStrategy !== 'OAuth') return

  validateOptions(clientOptions.auth)

  const state: AuthPluginState = {
    authStrategy: clientOptions.authStrategy,
    auth: clientOptions.auth,
  }

  client.auth = auth.bind(null, state)
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  client.requestHook.before(beforeHook.bind(null, state))
}

export default OAuth
