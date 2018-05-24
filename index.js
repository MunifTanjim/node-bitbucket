const Hook = require('before-after-hook')
const deepmerge = require('deepmerge')

const request = require('./libs/request')
const clientDefaults = require('./libs/defaults').CLIENT
const endpointDefaults = require('./libs/defaults').ENDPOINT

const Plugins = [
  require('./libs/plugins/authentication'),
  require('./libs/plugins/endpoint-methods'),
  require('./libs/plugins/oauth')
]

class BitBucket {
  constructor(options = {}) {
    let clientOptions = deepmerge(clientDefaults, options)

    let { baseUrl, headers, request } = clientOptions

    this.options = {
      baseUrl,
      headers,
      request
    }

    this.hook = new Hook()

    Plugins.forEach(Plugin => this.addPlugin(Plugin))

    this.request = this.request.bind(this)
  }

  addPlugin(Plugin) {
    new Plugin(this).inject()
  }

  request(options) {
    return this.hook('request', deepmerge(this.options, options), request)
  }
}

module.exports = BitBucket
