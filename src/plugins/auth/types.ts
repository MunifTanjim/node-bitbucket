export type APIClient = import('../../client/types').APIClient
export type Options = import('../../client/types').Options
export type RequestOptions = import('../../endpoint/types').RequestOptions

export type AuthBasic = {
  type: 'basic' | 'apppassword'
  username: string
  password: string
}

export type AuthToken = {
  type: 'token'
  token: string
}

export type OAuthCodeGrant = {
  grant_type: 'authorizationCodeGrant'
  client_id: string
  client_secret: string
  code: string
}

export type OAuthPasswordGrant = {
  grant_type: 'resourceOwnerPasswordCredentialsGrant'
  client_id: string
  client_secret: string
  username: string
  password: string
}

export type OAuthClientCredentialsGrant = {
  grant_type: 'clientCredentialsGrant'
  client_id: string
  client_secret: string
  username: string
  password: string
}

export type OAuthJWTGrant = {
  grant_type: 'bitbucketCloudJWTGrant'
  jwt_token: string
}

export type OAuthOptions =
  | OAuthCodeGrant
  | OAuthPasswordGrant
  | OAuthClientCredentialsGrant
  | OAuthJWTGrant

export type AuthOptions = AuthBasic | AuthToken
