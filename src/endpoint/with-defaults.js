const endpointWithDefaults = require('./endpoint-with-defaults')
const merge = require('./merge')
const parse = require('./parse')

function withDefaults(oldDefaults, newDefaults) {
  const DEFAULTS = merge(oldDefaults, newDefaults)
  const endpoint = endpointWithDefaults.bind(null, DEFAULTS)

  endpoint.DEFAULTS = DEFAULTS
  endpoint.defaults = withDefaults.bind(null, DEFAULTS)
  endpoint.merge = merge.bind(null, DEFAULTS)
  endpoint.parse = parse

  return endpoint
}

module.exports = withDefaults
