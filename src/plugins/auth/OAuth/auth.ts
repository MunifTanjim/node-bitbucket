import { getOAuthAccessToken } from './get-oauth-access-token'

type APIClient = import('./types').APIClient
type Authentication = import('./types').Authentication
type AuthState = import('./types').AuthPluginState

// eslint-disable-next-line @typescript-eslint/require-await
export async function auth(
  client: APIClient,
  authState: AuthState
): Promise<Authentication | {}> {
  if (!authState.token) {
    const newToken = await getOAuthAccessToken(client, authState)
    authState.token = newToken
  }

  return authState.token ?? {}
}
