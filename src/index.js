const deepmerge = require('deepmerge')
const Hook = require('before-after-hook')

const request = require('./request')

const Plugins = [
  require('./plugins/authentication'),
  require('./plugins/endpoint-methods'),
  require('./plugins/pagination')
]

const clientDefaults = {
  headers: {},
  options: {
    timeout: 0
  }
}

class BitBucket {
  constructor(clientOptions = {}) {
    this.options = deepmerge(clientDefaults, clientOptions)

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

module.exports = BitBucket
