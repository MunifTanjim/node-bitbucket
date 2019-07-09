const endpointDefaults = require('./defaults')
const withDefaults = require('./with-defaults')

const endpoint = withDefaults(null, endpointDefaults)

module.exports.endpoint = endpoint
