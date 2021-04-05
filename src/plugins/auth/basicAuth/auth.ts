import btoa from 'btoa-lite'

type AuthOptions = import('./types').AuthOptions
type Authentication = import('./types').Authentication

export function auth(authState: AuthOptions): Authentication {
  if (authState.type === 'token') {
    return {
      type: 'token',
      token: authState.token,
      headers: {
        authorization: `Bearer ${authState.token}`,
      },
    }
  }

  return {
    type: 'basic',
    username: authState.username,
    password: authState.password,
    headers: {
      authorization: `Basic ${btoa(
        `${authState.username}:${authState.password}`
      )}`,
    },
  }
}
