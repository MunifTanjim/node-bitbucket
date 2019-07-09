const fetchWrapper = require('./fetch-wrapper')

function withDefaults(oldEndpoint, newDefaults) {
  const endpoint = oldEndpoint.defaults(newDefaults)

  function request(endpointRoute, endpointParams) {
    const endpointOptions = endpoint.merge(endpointRoute, endpointParams)

    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint.parse(endpointOptions))
    }

    return endpointOptions.request.hook(endpointOptions, options =>
      fetchWrapper(endpoint.parse(options))
    )
  }

  request.defaults = withDefaults.bind(null, endpoint)
  request.endpoint = endpoint

  return request
}

module.exports = withDefaults
