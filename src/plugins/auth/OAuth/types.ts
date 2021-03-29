export type APIClient = import('../../../client/types').APIClient
export type Options = import('../../../client/types').Options
export type AuthOptions = import('../types').OAuthOptions
export type EndpointOptions = import('../../../endpoint/types').EndpointOptions

export type AuthPluginState = {
  authStrategy: string
  auth: AuthOptions
  token?: Authentication
}

export type SpecType = {
  authorizationUrl: string
  description: string
  flow: string
  scopes: {
    [key: string]: string
  }
  tokenUrl: string
  type: string
}

export type Authentication = {
  access_token: string
  refresh_token: string
  scopes: {
    [key: string]: string
  }
}
