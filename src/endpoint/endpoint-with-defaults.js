const merge = require('./merge')
const parse = require('./parse')

function endpointWithDefaults(
  endpointDefaults,
  endpointRoute,
  endpointOptions
) {
  return parse(merge(endpointDefaults, endpointRoute, endpointOptions))
}

module.exports = endpointWithDefaults
