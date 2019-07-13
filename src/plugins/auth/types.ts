export { Options } from '../../client/types'
export { RequestOptions } from '../../endpoint/types'

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
