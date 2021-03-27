import btoa from 'btoa-lite'
import oAuth2Spec from './spec.json'
import getOAuthRoutes from './routes'
import { request as Request } from '../../../request'

type AuthState = import('./types').AuthPluginState

const routes = getOAuthRoutes(oAuth2Spec).getToken
export const getOAuthAccessToken = async (state: AuthState): Promise<any> => {
  const { auth: authState } = state
  const grantType = authState.grant_type

  let headers
  if (authState.grant_type === 'bitbucketCloudJWTGrant') {
    headers = {
      authorization: `JWT ${btoa(`${authState.jwt_token}`)}`,
    }
  } else {
    headers = {
      authorization: `Basic ${btoa(
        `${authState.client_id}:${authState.client_secret}`
      )}`,
    }
  }

  const requestOptions = Object.assign(routes[grantType], {
    headers,
    request: {},
  })

  const request = Request.defaults(requestOptions)
  const response = await request(
    requestOptions,
    Object.assign(authState, {
      grant_type: routes[grantType].grant_type,
    })
  )

  const { data } = response

  const newToken = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    scopes: data.scopes.split(/\s/).filter(Boolean),
  }

  return newToken
}
