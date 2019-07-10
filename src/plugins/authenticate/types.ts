export type APIClient = import('../../client/types').APIClient

type AuthBasic = import('../../client/types').AuthBasic
type AuthToken = import('../../client/types').AuthToken

export type AuthenticateOptions =
  | AuthBasic & { type: 'apppassword' | 'basic' }
  | AuthToken & { type: 'token' }

export type AuthenticatePluginState = {
  client: APIClient
  auth?: AuthenticateOptions
}

export type Options = import('../../client/types').Options
export type RequestOptions = import('../../endpoint/types').RequestOptions
