const ENDPOINT_ROUTES = require('../../routes/routes')

const endpointMethod = require('./method')

class EndpointMethodsPlugin {
  constructor(apiClient) {
    this.core = apiClient
  }

  inject() {
    Object.keys(ENDPOINT_ROUTES).forEach(namespaceName => {
      this.core[namespaceName] = {}

      Object.keys(ENDPOINT_ROUTES[namespaceName]).forEach(apiName => {
        let apiOptions = ENDPOINT_ROUTES[namespaceName][apiName]

        let { method, params: paramSpecs, url, ...rest } = apiOptions

        let _paramGroups = {}
        Object.keys(paramSpecs).forEach(paramName => {
          let groupName = paramSpecs[paramName].in

          if (!Array.isArray(_paramGroups[groupName])) {
            _paramGroups[groupName] = []
          }

          _paramGroups[groupName].push(paramName)
        })

        this.core[namespaceName][apiName] = endpointMethod.bind(
          null,
          this.core,
          { method, url, ...rest, _paramGroups },
          paramSpecs
        )
      })
    })
  }
}
module.exports = EndpointMethodsPlugin
