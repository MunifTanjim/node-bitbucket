import btoa from 'btoa-lite'
import oAuth2Spec from './spec.json'
import getOAuthRoutes from './routes'
import { request as Request } from '../../../request'

type AuthState = import('./types').AuthPluginState
type EndpointOptions = import('./types').EndpointOptions

const routes = getOAuthRoutes(oAuth2Spec).getToken
export const getOAuthAccessToken = async (state: AuthState): Promise<any> => {
  const { auth: authState } = state
  const { grant_type: grantType } = authState
  const { accepts, url, method, grant_type } = routes[grantType]

  const endpointOptions: EndpointOptions = {
    accepts,
    url,
    method,
    headers: {},
    request: {},
    grant_type,
  }

  endpointOptions.headers!.authorization =
    authState.grant_type === 'bitbucketCloudJWTGrant'
      ? `JWT ${btoa(`${authState.jwt_token}`)}`
      : `Basic ${btoa(`${authState.client_id}:${authState.client_secret}`)}`

  if (authState.grant_type === 'authorizationCodeGrant') {
    endpointOptions.code = authState.code
  }

  if (authState.grant_type === 'resourceOwnerPasswordCredentialsGrant') {
    endpointOptions.username = authState.username
    endpointOptions.password = authState.password
  }

  const response = await Request(endpointOptions)
  const { data } = response

  const newToken = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    scopes: data.scopes.split(/\s/).filter(Boolean),
  }

  return newToken
}
