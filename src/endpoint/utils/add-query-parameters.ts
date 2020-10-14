export function addQueryParameters(
  url: string,
  params: { [param: string]: any; q?: string } = {}
): string {
  const separator = url.includes('?') ? '&' : '?'
  const names = Object.keys(params).filter(
    (name) => typeof params[name] !== 'undefined'
  )

  if (names.length === 0) {
    return url
  }

  return `${url}${separator}${names
    .map((name): string => {
      if (name === 'q') {
        return `q=${params.q!.split(' ').map(encodeURIComponent).join('+')}`
      }

      if (Array.isArray(params[name])) {
        return params[name]
          .map((value: string) => `${name}=${encodeURIComponent(value)}`)
          .join('&')
      }

      return `${name}=${encodeURIComponent(params[name])}`
    })
    .join('&')}`
}
