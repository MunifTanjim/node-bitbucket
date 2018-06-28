const { version } = require('../../package.json')

const { basePath, host, produces, schemes } = require('./spec')

const defaultEndpointOptions = {
  baseUrl: `${schemes[0]}://${host}${basePath}`,
  headers: {
    accept: `${produces.join(',')}`,
    'user-agent': `NodeBitBucket/${version}`
  },
  method: 'GET',
  options: {}
}

module.exports = defaultEndpointOptions
