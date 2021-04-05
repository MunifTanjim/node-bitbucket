import { auth } from './auth'

type AuthPluginState = import('./types').AuthPluginState
type RequestOptions = import('./types').RequestOptions
type Authentication = import('./types').Authentication

export function beforeRequest(
  state: AuthPluginState,
  requestOptions: RequestOptions
): void {
  const authData: Authentication = auth(state.auth)

  requestOptions.headers = {
    ...requestOptions.headers,
    ...authData.headers,
  }
}
