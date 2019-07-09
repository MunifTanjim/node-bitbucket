const { version } = require('../../package.json')

const { basePath, host, schemes } = require('./spec.json')

const endpointDefaults = {
  method: `GET`,
  baseUrl: `${schemes[0]}://${host}${basePath}`,
  headers: {
    accept: `application/json`,
    'user-agent': `bitbucket.js/${version}`
  }
}

module.exports = endpointDefaults
