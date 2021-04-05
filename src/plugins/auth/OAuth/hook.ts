import { auth } from './auth'

type AuthState = import('./types').AuthPluginState
type RequestOptions = import('./types').RequestOptions

export async function beforeHook(
  authState: AuthState,
  requestOptions: RequestOptions
): Promise<void> {
  if (!authState.token) {
    await auth(authState)
  } else if (authState.token.access_token) {
    requestOptions.headers.authorization = `Bearer ${authState.token.access_token}`
  }
}
