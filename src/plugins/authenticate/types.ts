import { Options } from '../../client/types'
import { RequestOptions } from '../../endpoint/types'

export type {
  Options,
  RequestOptions
}

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
