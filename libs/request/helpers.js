const addQueryParameters = (url, params) => {
  const separator = /\?/.test(url) ? '&' : '?'
  const names = Object.keys(params)

  if (0 === names.length) {
    return url
  }

  return `${url}${separator}${names
    .map(name => {
      return 'q' === name
        ? `q=${params.q
            .split('+')
            .map(encodeURIComponent)
            .join('+')}`
        : `${name}=${encodeURIComponent(params[name])}`
    })
    .join('&')}`
}

module.exports.addQueryParameters = addQueryParameters
