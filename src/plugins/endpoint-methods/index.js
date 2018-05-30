const ROUTES = require('../../routes/routes.json')

const endpointMethod = require('./method')
const getParamGroups = require('./get-param-groups')

class EndpointMethodsPlugin {
  constructor(apiClient) {
    this.core = apiClient
  }

  inject() {
    Object.keys(ROUTES).forEach(namespaceName => {
      this.core[namespaceName] = {}

      Object.keys(ROUTES[namespaceName]).forEach(apiName => {
        let apiOptions = ROUTES[namespaceName][apiName]

        if (apiOptions.alias) {
          let [namespaceAlias, apiAlias] = apiOptions.alias.split('.')
          apiOptions = ROUTES[namespaceAlias][apiAlias]
        }

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
