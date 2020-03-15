import { Options } from '../../client/types'
import { RequestOptions } from '../../endpoint/types'

export type {
  Options,
  RequestOptions
}
export type APIClient = import('../../client/types').APIClient

export type AuthBasic = {
  username: string
  password: string
}

export type AuthToken = {
  token: string
}

export type AuthOptions = AuthBasic | AuthToken

export type AuthPluginState = {
  client: APIClient
  auth: AuthOptions
}
