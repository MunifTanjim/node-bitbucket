export type APIClient = import('../../client/types').APIClient
export type AuthOptions = import('../../client/types').AuthOptions

export type AuthPluginState = {
  client: APIClient
  auth: AuthOptions
}

export type Options = import('../../client/types').Options
export type RequestOptions = import('../../endpoint/types').RequestOptions
