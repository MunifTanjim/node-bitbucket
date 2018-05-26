const btoa = require('btoa-lite')

/**
 * Prepares Authentication Options before Request
 * @param {Object} state - Authentication State
 * @param {Object} options
 */
const authenticationBeforeRequest = (state, options) => {
  if (!state.auth.type) {
    return
  }

  if (['basic', 'apppassword'].includes(state.auth.type)) {
    const hash = btoa(`${state.auth.username}:${state.auth.password}`)
    options.headers['authorization'] = `Basic ${hash}`
    return
  }

  if (state.auth.type === 'token') {
    options.headers['authorization'] = `Bearer ${state.auth.token}`
    return
  }

  options.url += options.url.indexOf('?') === -1 ? '?' : '&'

  if (state.auth.token) {
    options.url += `access_token=${encodeURIComponent(state.auth.token)}`
    return
  }

  const key = encodeURIComponent(state.auth.key)
  const secret = encodeURIComponent(state.auth.secret)
  options.url += `client_id=${key}&client_secret=${secret}`
}

module.exports = authenticationBeforeRequest
