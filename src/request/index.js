const { endpoint } = require('../endpoint')
const withDefaults = require('./with-defaults')

const request = withDefaults(endpoint, {})

module.exports.request = request
