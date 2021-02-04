type AuthOptions = import('./types').AuthOptions

export function validateOptions(auth: AuthOptions): void {
  if ('token' in auth) return

  switch (auth.type) {
    case 'basic':
      if (auth.username && auth.password) break
      throw new Error(`Specify username and password for basic authentication`)
    case 'client_grant':
      if (auth.client_id && auth.client_secret) break
      throw new Error(
        `Specify client_id and client_secret for ClientGrant authentication`
      )
    default:
      throw new Error(`Invalid "auth" option: ${JSON.stringify(auth)}`)
  }
}
