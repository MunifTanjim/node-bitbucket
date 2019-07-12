export function addQueryParameters(
  url: string,
  params: { [param: string]: any } = {}
): string {
  const separator = /\?/.test(url) ? '&' : '?'
  const names = Object.keys(params)

  if (names.length === 0) {
    return url
  }

  return `${url}${separator}${names
    .map((name): string => {
      if (name === 'q') {
        return `q=${params.q
          .split(' ')
          .map(encodeURIComponent)
          .join('+')}`
      }
      return `${name}=${encodeURIComponent(params[name])}`
    })
    .join('&')}`
}
