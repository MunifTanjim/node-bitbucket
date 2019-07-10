type AuthOptions = import('./types').AuthOptions

export function validateOptions(auth: AuthOptions): void {
  if ('token' in auth) return

  if (auth.username && auth.password) return

  throw new Error(`Invalid "auth" option: ${JSON.stringify(auth)}`)
}
