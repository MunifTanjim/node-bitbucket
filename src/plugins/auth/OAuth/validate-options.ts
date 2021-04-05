type AuthOptions = import('./types').AuthOptions

export function validateOptions(auth: AuthOptions): void {
  if (!auth.grant_type) {
    throw new Error(`Specify grant_type`)
  }

  if (
    auth.grant_type !== 'bitbucketCloudJWTGrant' &&
    (!auth.client_id || !auth.client_secret)
  ) {
    throw new Error(`Specify client_id and client_secret for authentication`)
  }

  if (auth.grant_type === 'authorizationCodeGrant' && !auth.code) {
    throw new Error(`code is required for Code Grant Authorization`)
  }

  if (
    auth.grant_type === 'resourceOwnerPasswordCredentialsGrant' &&
    (!auth.username || auth.password)
  ) {
    throw new Error(
      `Both username and password are required for Resource Owner Password Credentials Grant`
    )
  }

  if (auth.grant_type === 'bitbucketCloudJWTGrant' && !auth.jwt_token) {
    throw new Error(`jwt_token is required for Bitbucket Cloud JWT Grant`)
  }
}
