const Bitbucket = require('./client')

const Plugins = [
  require('./plugins/notice'),
  require('./plugins/auth'),
  require('./plugins/pagination'),
  require('./plugins/register-endpoints'),
  require('./plugins/register-api-endpoints'),
  require('./plugins/validate-request')
]

module.exports = Bitbucket.plugins(Plugins)
