const deepmerge = require('deepmerge')

const validate = require('./validate')

const apiMethod = (
  client,
  endpointDefaults,
  endpointParams,
  options = {},
  callback
) => {
  let endpointOptions = deepmerge(endpointDefaults, options)

  let promise = Promise.resolve(endpointOptions)
    .then(validate.bind(null, endpointParams))
    .then(client.request)

  if (callback) {
    promise.then(callback.bind(null, null), callback)
    return
  }

  return promise
}

module.exports = apiMethod
