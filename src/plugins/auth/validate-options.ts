type AuthOptions = import('./types').AuthOptions

export function validateOptions(auth: AuthOptions): void {
  if ('token' in auth) return

  if ('username' in auth && 'password' in auth) return

  if (auth.appKey && auth.appClientKey && auth.appSharedSecret) return

  throw new Error(`Invalid "auth" option: ${JSON.stringify(auth)}`)
}
