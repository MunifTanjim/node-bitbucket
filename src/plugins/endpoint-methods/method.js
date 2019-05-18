const deepmerge = require('../../utils/deepmerge.js')

const validate = require('./validate.js')

const endpointMethod = (
  apiClient,
  endpointDefaults,
  endpointParamsSpecs,
  options = {},
  callback
) => {
  let endpointOptions = deepmerge(endpointDefaults, options)

  if (endpointOptions.deprecated) {
    console.log(
      `\x1b[43m\x1b[30m %s \x1b[0m\x1b[33m %s \x1b[0m`,
      `DEPRECATION WARNING:`,
      endpointOptions.url
    )
  }

  let promise = Promise.resolve(endpointOptions)
    .then(endpointOptions => validate(endpointParamsSpecs, endpointOptions))
    .then(apiClient.request)

  if (callback) {
    promise
      .then(response => {
        callback(null, response)
      })
      .catch(callback)
    return
  }

  return promise
}

module.exports = endpointMethod
