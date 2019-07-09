const btoa = require('btoa-lite')

const authBeforeRequest = (state, requestOptions) => {
  if (state.auth.username) {
    const hash = btoa(`${state.auth.username}:${state.auth.password}`)

    requestOptions.headers['authorization'] = `Basic ${hash}`
  } else if (state.auth.token) {
    requestOptions.headers['authorization'] = `Bearer ${state.auth.token}`
  }
}

module.exports = authBeforeRequest
