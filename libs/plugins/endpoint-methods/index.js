const ENDPOINT_ROUTES = require('../../routes/routes')

const apiMethod = require('./method')

class EndpointMethodsPlugin {
  constructor(BitBucket) {
    this.core = BitBucket
  }

  inject() {
    Object.keys(ENDPOINT_ROUTES).forEach(namespaceName => {
      this.core[namespaceName] = {}

      Object.keys(ENDPOINT_ROUTES[namespaceName]).forEach(apiName => {
        let apiOptions = ENDPOINT_ROUTES[namespaceName][apiName]

        let { method, params, url, ...rest } = apiOptions

        let _paramGroups = {}
        Object.keys(params).forEach(paramName => {
          let groupName = params[paramName].in

          if (!Array.isArray(_paramGroups[groupName]))
            _paramGroups[groupName] = []
          _paramGroups[groupName].push(paramName)
        })

        this.core[namespaceName][apiName] = apiMethod.bind(
          null,
          this.core,
          { method, url, ...rest, _paramGroups },
          params
        )
      })
    })
  }
}
module.exports = EndpointMethodsPlugin
