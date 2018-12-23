const Hook = require('before-after-hook')

const deepmerge = require('./utils/deepmerge.js')
const request = require('./request/index.js')

const Plugins = [
  require('./plugins/authentication/index.js'),
  require('./plugins/endpoint-methods/index.js'),
  require('./plugins/pagination/index.js')
]

const clientDefaults = {
  headers: {},
  options: {
    timeout: 0
  }
}

class Bitbucket {
  constructor(options = {}) {
    this.options = deepmerge(clientDefaults, options)

    this.hook = new Hook()

    this.request = this.request.bind(this)

    Plugins.forEach(Plugin => this.addPlugin(Plugin))
  }

  addPlugin(Plugin) {
    new Plugin(this).inject()
  }

  request(options = {}) {
    return this.hook('request', deepmerge(this.options, options), request)
  }
}

console.warn(
  `\x1b[43m\x1b[30m %s \x1b[0m\x1b[33m %s \x1b[0m`,
  `BITBUCKET CLOUD API CHANGING NOTICE:`,
  `https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr`
)

console.info(
  '\x1b[46m\x1b[30m %s \x1b[0m\x1b[36m %s \x1b[0m',
  `BITBUCKET CLOUD API MIGRATION GUIDE:`,
  `https://developer.atlassian.com/cloud/bitbucket/bbc-gdpr-api-migration-guide`
)

module.exports = Bitbucket
