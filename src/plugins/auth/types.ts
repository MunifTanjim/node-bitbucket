export type APIClient = import('../../client/types').APIClient
export type Options = import('../../client/types').Options
export type RequestOptions = import('../../endpoint/types').RequestOptions

export type AuthBasic = {
  username: string
  password: string
}

export type AuthToken = {
  token: string
}

export type AuthJwt = {
  appKey: string
  appClientKey: string
  appSharedSecret: string
}

export type AuthOptions = AuthBasic | AuthToken | AuthJwt

export type AuthPluginState = {
  client: APIClient
  auth: AuthOptions
}
