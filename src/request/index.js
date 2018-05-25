const getRequestOptions = require('./request-options')
const fetch = require('./fetch')

/**
 * Gets the Request Options and Performs Request
 * @param {Object} endpointOptions
 */
const request = endpointOptions => {
  let requestOptions = getRequestOptions(endpointOptions)
  return fetch(requestOptions)
}

module.exports = request
