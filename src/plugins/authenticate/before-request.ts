import btoa from 'btoa-lite'

type AuthenticatePluginState = import('./types').AuthenticatePluginState
type RequestOptions = import('./types').RequestOptions

export function beforeRequest(
  state: AuthenticatePluginState,
  requestOptions: RequestOptions
): void {
  if (!state.auth) {
    return
  }

  switch (state.auth.type) {
    case 'apppassword':
    case 'basic':
      requestOptions.headers.authorization = `Basic ${btoa(
        `${state.auth.username}:${state.auth.password}`
      )}`
      break
    case 'token':
      requestOptions.headers.authorization = `Bearer ${state.auth.token}`
      break
  }
}
