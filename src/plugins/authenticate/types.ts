export type APIClient = import('../../client/types').APIClient
export type Options = import('../../client/types').Options
export type RequestOptions = import('../../endpoint/types').RequestOptions
export type AuthOptions = import('../auth/types').AuthOptions

export type AuthenticatePluginState = {
  client: APIClient
  auth?: AuthOptions
}
