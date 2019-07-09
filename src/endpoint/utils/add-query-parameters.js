const addQueryParameters = (url, params = {}) => {
  const separator = /\?/.test(url) ? '&' : '?'
  const names = Object.keys(params)

  if (names.length === 0) {
    return url
  }

  return `${url}${separator}${names
    .map(name => {
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

module.exports.addQueryParameters = addQueryParameters
