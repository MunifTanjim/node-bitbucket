/**
 * Adds Query Parameters to URL
 * @param {String} url - URL
 * @param {Object} params - Query Parameters
 * @returns {String} URL with added Query Parameters
 */
const addQueryParameters = (url, params = {}) => {
  const separator = /\?/.test(url) ? '&' : '?'
  const names = Object.keys(params)

  if (names.length === 0) {
    return url
  }

  return `${url}${separator}${names
    .map(name => {
      return name === 'q'
        ? `q=${params.q
            .split('+')
            .map(encodeURIComponent)
            .join('+')}`
        : `${name}=${encodeURIComponent(params[name])}`
    })
    .join('&')}`
}

module.exports = addQueryParameters
