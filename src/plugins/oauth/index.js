const endpointMethod = require('../endpoint-methods/method')

const {
  oauth2: oAuth2Spec
} = require('../../../specification/securityDefinitions')

const routes = require('./routes')(oAuth2Spec)

class OAuthPlugin {
  constructor(apiClient) {
    this.core = apiClient
    this.scopes = Object.keys(oAuth2Spec.scopes)
  }

  inject() {
    this.core.oauth = {}

    Object.keys(routes).forEach(namespaceName => {
      this.core.oauth[namespaceName] = {}

      Object.keys(routes[namespaceName]).forEach(apiName => {
        let apiOptions = routes[namespaceName][apiName]

        let { method, params: paramSpecs, url, ...rest } = apiOptions

        let _paramGroups = {}
        Object.keys(paramSpecs).forEach(paramName => {
          let groupName = paramSpecs[paramName].in

          if (!Array.isArray(_paramGroups[groupName])) {
            _paramGroups[groupName] = []
          }

          _paramGroups[groupName].push(paramName)
        })

        this.core.oauth[namespaceName][apiName] = endpointMethod.bind(
          null,
          this.core,
          { method, url, ...rest, _paramGroups },
          paramSpecs
        )
      })
    })
  }
}

module.exports = OAuthPlugin
