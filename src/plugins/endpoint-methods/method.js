const deepmerge = require('deepmerge')

const validate = require('./validate')

const endpointMethod = (
  apiClient,
  endpointDefaults,
  endpointParamsSpecs,
  options = {},
  callback
) => {
  let endpointOptions = deepmerge(endpointDefaults, options)

  let promise = Promise.resolve(endpointOptions)
    .then(validate.bind(null, endpointParamsSpecs))
    .then(apiClient.request)

  if (callback) {
    promise.then(callback.bind(null, null)).catch(callback)
    return
  }

  return promise
}

module.exports = endpointMethod
