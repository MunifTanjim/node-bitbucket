const pkg = require('../package.json')
const info = require('../api-spec/others')

module.exports.ENDPOINT = {
  method: 'GET',
  headers: {},
  request: {}
}

module.exports.CLIENT = {
  baseUrl: `${info.schemes[0]}://${info.host}${info.basePath}`,
  headers: {
    accept: `${info.produces.join(',')}`,
    'user-agent': `Node BitBucket v${pkg.version}`
  },
  request: {
    timeout: 0
  }
}
