import btoa from 'btoa-lite'
import oAuth2Spec from './spec.json'
import getOAuthRoutes from './routes'

type APIClient = import('./types').APIClient
type AuthState = import('./types').AuthPluginState

const routes = getOAuthRoutes(oAuth2Spec).getToken
export const getOAuthAccessToken = async (
  client: APIClient,
  state: AuthState
): Promise<any> => {
  const { auth: authState } = state
  const grantType = authState.grant_type

  let request
  if (authState.grant_type === 'bitbucketCloudJWTGrant') {
    request = client.oauth[grantType].defaults({
      headers: {
        accept: 'application/x-www-form-urlencoded',
        authorization: `JWT ${btoa(`${authState.jwt_token}`)}`,
      },
    })
  } else {
    request = client.oauth[grantType].defaults({
      headers: {
        // accept: 'application/x-www-form-urlencoded',
        authorization: `Basic ${btoa(
          `${authState.client_id}:${authState.client_secret}`
        )}`,
      },
    })
  }

  authState.grant_type = routes[grantType].grant_type
  const response = await request(authState)
  const { data } = response

  const newToken = {
    access_token: data.access_token,
    refresh_token: data.refresh_tokenaccess_token,
    scopes: data.scope.split(/,\s*/).filter(Boolean),
  }

  return newToken
}
