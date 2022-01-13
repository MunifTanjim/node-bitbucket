type AuthBasic = import('../auth/types').AuthBasic
type AuthToken = import('../auth/types').AuthToken
type AuthJwt = import('../auth/types').AuthJwt
export type APIClient = import('../../client/types').APIClient
export type Options = import('../../client/types').Options
export type RequestOptions = import('../../endpoint/types').RequestOptions

export type AuthenticateOptions =
  | (AuthBasic & { type: 'apppassword' | 'basic' })
  | (AuthToken & { type: 'token' })
  | (AuthJwt & { type: 'jwt' })

export type AuthenticatePluginState = {
  client: APIClient
  auth?: AuthenticateOptions
}
