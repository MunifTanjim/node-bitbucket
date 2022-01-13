import btoaLite from 'utils/btoa-lite'
import { createJwt } from 'utils/create-jwt'

type AuthPluginState = import('./types').AuthPluginState
type RequestOptions = import('./types').RequestOptions

export function beforeRequest(
  state: AuthPluginState,
  requestOptions: RequestOptions
): void {
  if ('token' in state.auth) {
    requestOptions.headers.authorization = `Bearer ${state.auth.token}`
  } else if ('username' in state.auth) {
    const hash = btoaLite(`${state.auth.username}:${state.auth.password}`)

    requestOptions.headers.authorization = `Basic ${hash}`
  } else if (state.auth.appClientKey) {
    const jwtValue = createJwt(
      requestOptions.method,
      requestOptions.url,
      state.auth
    )

    requestOptions.headers.authorization = `JWT ${jwtValue}`
  }
}
