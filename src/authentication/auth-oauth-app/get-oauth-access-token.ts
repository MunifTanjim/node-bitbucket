import { RequestError } from '@octokit/request-error'

import {
  AuthTokenOptions,
  RequestInterface,
  State,
  TokenWithScopes,
} from './types'

export async function getOAuthAccessToken(
  state: State,
  options: {
    request?: RequestInterface
    auth?: AuthTokenOptions
  }
): Promise<TokenWithScopes> {
  const authOptionsPassed = options.auth
    ? typeof options.auth.code !== 'undefined'
    : false

  const authOptions = options.auth && authOptionsPassed ? options.auth : state

  if (state.token && !authOptionsPassed) {
    return state.token
  }

  // The "/login/oauth/access_token" is not part of the REST API hosted on api.github.com,
  // instead it’s using the github.com domain.
  const route = /^https:\/\/(api\.)?github\.com$/.test(
    state.request.endpoint.DEFAULTS.baseUrl
  )
    ? 'POST https://github.com/login/oauth/access_token'
    : `POST ${state.request.endpoint.DEFAULTS.baseUrl.replace(
        '/api/v3',
        '/login/oauth/access_token'
      )}`

  const request = options.request || state.request

  const parameters = {
    headers: {
      accept: 'application/json',
    },
    client_id: state.clientId,
    client_secret: state.clientSecret,
    code: authOptions.code,
    redirect_uri: authOptions.redirectUrl,
    state: authOptions.state,
  }

  const response = await request(route, parameters)

  if (response.data.error !== undefined) {
    throw new RequestError(
      `${response.data.error_description} (${response.data.error})`,
      response.status,
      {
        headers: response.headers,
        request: request.endpoint(route, parameters),
      }
    )
  }

  const { data } = response

  const newToken = {
    token: data.access_token,
    scopes: data.scope.split(/,\s*/).filter(Boolean),
  }

  if (!authOptionsPassed) {
    state.token = newToken
  }

  return newToken
}
