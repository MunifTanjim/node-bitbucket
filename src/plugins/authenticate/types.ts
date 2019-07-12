export { Options } from '../../client/types'
export { RequestOptions } from '../../endpoint/types'

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
