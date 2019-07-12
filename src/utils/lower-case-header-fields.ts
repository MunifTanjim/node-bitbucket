type Headers = import('../endpoint/types').Headers

export function lowerCaseHeaderFields(headers: Headers = {}): Headers {
  return Object.keys(headers).reduce((newHeaders: Headers, key): Headers => {
    newHeaders[key.toLowerCase()] = headers[key]
    return newHeaders
  }, {})
}
