import btoa from 'btoa-lite'

type AuthPluginState = import('./types').AuthPluginState
type RequestOptions = import('./types').RequestOptions

export function beforeRequest(
  state: AuthPluginState,
  requestOptions: RequestOptions
): void {
  if ('token' in state.auth) {
    requestOptions.headers.authorization = `Bearer ${state.auth.token}`
  } else if (state.auth.username) {
    const hash = btoa(`${state.auth.username}:${state.auth.password}`)

    requestOptions.headers.authorization = `Basic ${hash}`
  }
}
