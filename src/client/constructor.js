const Hook = require('before-after-hook')

const getRequestOptions = require('./get-request-options')
const { request } = require('../request')

function constructor(plugins, clientOptions = {}) {
  const hook = new Hook.Collection()

  const apiClient = {
    hook,
    request: request.defaults(getRequestOptions(clientOptions, hook))
  }

  plugins.forEach(plugin => plugin(apiClient, clientOptions))

  return apiClient
}

module.exports = constructor
