type AuthOptions = import('./types').AuthOptions

export function validateOptions(auth: AuthOptions): void {
  if ('token' in auth) return

  if (!auth.username || !auth.password)
    throw new Error(`Specify username and password for basic authentication`)
}
