export type APIClient = import('../../../client/types').APIClient
export type Options = import('../../../client/types').BitbucketOptions
export type RequestOptions = import('../../../endpoint/types').RequestOptions

type AuthHeaders = {
  headers: {
    authorization: string
  }
}

export type AuthOptions =
  | import('../types').AuthBasic
  | import('../types').AuthToken

export type AuthBasic = import('../types').AuthBasic &
  AuthHeaders & { username: string; password: string }

export type AuthToken = import('../types').AuthToken & AuthHeaders

export type Authentication = AuthBasic | AuthToken

export type AuthPluginState = {
  client: APIClient
  auth: AuthOptions
}
