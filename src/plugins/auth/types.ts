export { Options } from '../../client/types'
export { RequestOptions } from '../../endpoint/types'

export type APIClient = import('../../client/types').APIClient
export type AuthOptions = import('../../client/types').AuthOptions

export type AuthPluginState = {
  client: APIClient
  auth: AuthOptions
}
