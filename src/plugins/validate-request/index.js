const validate = require('./validate')

function validateRequestPlugin(client) {
  client.hook.before('request', validate.bind(null, client))
}

module.exports = validateRequestPlugin
