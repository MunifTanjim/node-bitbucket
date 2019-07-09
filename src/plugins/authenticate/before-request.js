const btoa = require('btoa-lite')

const authenticateBeforeRequest = (state, options) => {
  if (!state.auth.type) {
    return
  }

  if (state.auth.type === 'basic') {
    const hash = btoa(`${state.auth.username}:${state.auth.password}`)

    options.headers['authorization'] = `Basic ${hash}`
  } else if (state.auth.type === 'token') {
    options.headers['authorization'] = `Bearer ${state.auth.token}`
  }
}

module.exports = authenticateBeforeRequest
