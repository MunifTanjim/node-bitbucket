function lowerCaseHeaderFields(headers = {}) {
  return Object.keys(headers).reduce((newHeaders, key) => {
    newHeaders[key.toLowerCase()] = headers[key]
    return newHeaders
  }, {})
}

module.exports.lowerCaseHeaderFields = lowerCaseHeaderFields
