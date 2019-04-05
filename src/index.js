const Hook = require('before-after-hook')

const deepmerge = require('./utils/deepmerge.js')
const request = require('./request/index.js')

const Plugins = [
  require('./plugins/authentication/index.js'),
  require('./plugins/endpoint-methods/index.js'),
  require('./plugins/pagination/index.js')
]

const logNotice = require('./utils/log-notice.js')

const clientDefaults = {
  headers: {},
  options: {
    timeout: 0
  }
}

class Bitbucket {
  constructor(options = {}) {
    this.options = deepmerge(clientDefaults, options)

    this.hook = new Hook.Collection()

    this.request = this.request.bind(this)

    Plugins.forEach(Plugin => this.addPlugin(Plugin))

    if (!this.options.hideNotice) logNotice()
    delete this.options.hideNotice
  }

  addPlugin(Plugin) {
    new Plugin(this).inject()
  }

  request(options = {}) {
    return this.hook('request', deepmerge(this.options, options), request)
  }
}

module.exports = Bitbucket
