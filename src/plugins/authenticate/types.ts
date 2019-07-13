export { Options } from '../../client/types'
export { RequestOptions } from '../../endpoint/types'

export type APIClient = import('../../client/types').APIClient

type AuthBasic = import('../auth/types').AuthBasic
type AuthToken = import('../auth/types').AuthToken

export type AuthenticateOptions =
  | AuthBasic & { type: 'apppassword' | 'basic' }
  | AuthToken & { type: 'token' }

export type AuthenticatePluginState = {
  client: APIClient
  auth?: AuthenticateOptions
}
