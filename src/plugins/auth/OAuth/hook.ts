import { auth } from './auth'

type APIClient = import('./types').APIClient
type Authentication = import('./types').Authentication
type AuthState = import('./types').AuthPluginState
type RequestOptions = import('./types').RequestOptions

// eslint-disable-next-line @typescript-eslint/require-await
export async function beforeHook(
  client: APIClient,
  authState: AuthState,
  requestOptions: RequestOptions
): Promise<void> {
  if (!authState.token) {
    await auth(client, authState)
  } else if (authState.token.access_token) {
    requestOptions.headers.authorization = `Bearer ${authState.token.access_token}`
  }
}
