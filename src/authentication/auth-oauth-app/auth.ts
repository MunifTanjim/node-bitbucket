import btoa from 'btoa-lite'

import { getOAuthAccessToken } from './get-oauth-access-token'
import { requiresBasicAuth } from './requires-basic-auth'
import { State, AuthOptions, Authentication } from './types'

export async function auth(
  state: State,
  authOptions: AuthOptions
): Promise<Authentication> {
  if (authOptions.type === 'token') {
    const { token, scopes } = await getOAuthAccessToken(state, {
      auth: authOptions,
    })

    return {
      type: 'token',
      token,
      tokenType: 'oauth',
      scopes,
    }
  }

  return {
    type: 'oauth-app',
    clientId: state.clientId,
    clientSecret: state.clientSecret,
    headers: {
      authorization: `basic ${btoa(`${state.clientId}:${state.clientSecret}`)}`,
    },
  }
}
