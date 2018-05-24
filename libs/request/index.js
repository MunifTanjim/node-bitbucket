const getRequestOptions = require('./request-options')
const fetch = require('./fetch')

const restRequest = endpointOptions => {
  let requestOptions = getRequestOptions(endpointOptions)
  return fetch(requestOptions)
}

module.exports = restRequest
