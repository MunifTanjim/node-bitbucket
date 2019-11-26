/**
 * Adds Query Parameters to URL
 * @param {String} url - URL
 * @param {Object} params - Query Parameters
 * @returns {String} URL with added Query Parameters
 */
const qs = require('qs')

const addQueryParameters = (url, params = {}) => {
  const separator = /\?/.test(url) ? '&' : '?'
  const names = Object.keys(params)

  if (names.length === 0) {
    return url
  }

  return `${url}${separator}${names
    .map(name => {
      if (name === 'q') {
        let parts = Array.isArray(params.q) ? params.q : [params.q]
        return `q=${parts
          .map(part =>
            part
              .split(' ')
              .map(encodeURIComponent)
              .join('+')
          )
          .join('+')}`
      }
      if (name === 'state') {
        if (Array.isArray(params.state)) {
          return `${qs.stringify({ state: params.state }, { arrayFormat: "repeat" })}`
        }
      }
      return `${name}=${encodeURIComponent(params[name])}`
    })
    .join('&')}`
}

module.exports = addQueryParameters
