import btoa from 'btoa-lite'

import { getOAuthAccessToken } from './get-oauth-access-token'
import { requiresBasicAuth } from './requires-basic-auth'
import {
  AnyResponse,
  EndpointOptions,
  RequestParameters,
  RequestInterface,
  Route,
  State,
} from './types'
import { EndpointDefaults } from '@octokit/types'

export async function hook(
  state: State,
  request: RequestInterface,
  route: Route | EndpointOptions,
  parameters?: RequestParameters
): Promise<AnyResponse> {
  let endpoint = request.endpoint.merge(
    route as string,
    parameters
  ) as EndpointDefaults & { url: string }

  // Do not intercept request to retrieve a new token
  if (/\/login\/oauth\/access_token$/.test(endpoint.url as string)) {
    return request(endpoint)
  }

  if (!state.code || requiresBasicAuth(endpoint.url)) {
    const credentials = btoa(`${state.clientId}:${state.clientSecret}`)
    endpoint.headers.authorization = `basic ${credentials}`

    const response = await request(endpoint)

    // `POST /applications/{client_id}/tokens/{access_token}` (legacy) or
    // `PATCH /applications/{client_id}/token` resets the passed token
    // and returns a new one. If that’s the current request then update internal state.
    // Regex supports both the `{param}` as well as the legacy `:param` notation
    const isLegacyTokenResetRequest =
      endpoint.method === 'POST' &&
      /^\/applications\/[:{]?[\w_]+\}?\/tokens\/[:{]?[\w_]+\}?$/.test(
        endpoint.url
      )
    const isTokenResetRequest =
      endpoint.method === 'PATCH' &&
      /^\/applications\/[:{]?[\w_]+\}?\/token$/.test(endpoint.url)

    if (isLegacyTokenResetRequest || isTokenResetRequest) {
      state.token = {
        token: response.data.token,
        // @ts-ignore figure this out
        scope: response.data.scopes,
      }
    }

    return response
  }

  const { token } = await getOAuthAccessToken(state, { request })
  endpoint.headers.authorization = `token ${token}`

  return request(endpoint as EndpointOptions)
}
