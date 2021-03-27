import { getOAuthAccessToken } from './get-oauth-access-token'

type Authentication = import('./types').Authentication
type AuthState = import('./types').AuthPluginState

export async function auth(authState: AuthState): Promise<Authentication | {}> {
  if (!authState.token) {
    const newToken = await getOAuthAccessToken(authState)
    authState.token = newToken
  }

  return authState.token ?? {}
}
