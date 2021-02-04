export type APIClient = import('../../client/types').APIClient
export type Options = import('../../client/types').Options
export type RequestOptions = import('../../endpoint/types').RequestOptions

export type AuthBasic = {
  type: 'basic' | 'apppassword'
  username: string
  password: string
}

export type AuthClientGrant = {
  type: 'client_grant'
  client_id: string
  client_secret: string
}

export type AuthToken = {
  type: 'token'
  token: string
}

export type AuthOptions = AuthBasic | AuthToken | AuthClientGrant

export type AuthPluginState = {
  client: APIClient
  auth: AuthOptions
}
