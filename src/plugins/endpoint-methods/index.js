const ENDPOINT_ROUTES = require('../../routes/routes')

const endpointMethod = require('./method')
const getParamGroups = require('./get-param-groups')

class EndpointMethodsPlugin {
  constructor(apiClient) {
    this.core = apiClient
  }

  inject() {
    Object.keys(ENDPOINT_ROUTES).forEach(namespaceName => {
      this.core[namespaceName] = {}

      Object.keys(ENDPOINT_ROUTES[namespaceName]).forEach(apiName => {
        let apiOptions = ENDPOINT_ROUTES[namespaceName][apiName]

        let { accepts, method, params: paramsSpecs, url, ...rest } = apiOptions

        let _paramGroups = getParamGroups(paramsSpecs)

        let defaults = { method, url, ...rest, _paramGroups }

        if (accepts) defaults.accepts = accepts

        this.core[namespaceName][apiName] = endpointMethod.bind(
          null,
          this.core,
          defaults,
          paramsSpecs
        )
      })
    })
  }
}
module.exports = EndpointMethodsPlugin
