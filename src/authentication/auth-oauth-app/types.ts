import * as OctokitTypes from '@octokit/types'

export type AnyResponse = OctokitTypes.OctokitResponse<any>
export type EndpointDefaults = OctokitTypes.EndpointDefaults
export type EndpointOptions = OctokitTypes.EndpointOptions
export type RequestParameters = OctokitTypes.RequestParameters
export type Route = OctokitTypes.Route
export type RequestInterface = OctokitTypes.RequestInterface
export type StrategyInterface = OctokitTypes.StrategyInterface<
  [StrategyOptions],
  [AuthOptions],
  Authentication
>
export type StrategyOptions = {
  clientId: string
  clientSecret: string
  code?: string
  redirectUrl?: string
  state?: string
  request?: RequestInterface
}

type AuthAppOptions = {
  type: 'oauth-app'
}
export type AuthTokenOptions = {
  type: 'token'
  code?: string
  redirectUrl?: string
  state?: string
}

export type AuthOptions = AuthAppOptions | AuthTokenOptions

export type TokenWithScopes = {
  token: string
  scopes: string[]
}
export type TokenAuthentication = TokenWithScopes & {
  type: 'token'
  tokenType: 'oauth'
}
export type appAuthentication = {
  type: 'oauth-app'
  clientId: string
  clientSecret: string
  headers: {
    authorization: string
  }
}
export type Authentication = TokenAuthentication | appAuthentication
export type State = StrategyOptions & {
  request: RequestInterface
  token?: TokenWithScopes
}
