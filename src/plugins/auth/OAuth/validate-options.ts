type AuthOptions = import('./types').AuthOptions

export function validateOptions(auth: AuthOptions): void {
  if (
    auth.grant_type !== 'bitbucketCloudJWTGrant' &&
    (!auth.client_id || !auth.client_secret)
  ) {
    throw new Error(`Specify client id and client secret for authentication`)
  }

  if (!auth.grant_type) {
    throw new Error(`Specify grant type`)
  }
}
