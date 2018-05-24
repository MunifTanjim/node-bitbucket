const oAuth2Spec = require('../../../api-spec/securityDefinitions').oauth2

const apiMethod = require('../endpoint-methods/method')

const routes = require('./routes')(oAuth2Spec)

class OAuthPlugin {
  constructor(BitBucket) {
    this.core = BitBucket
    this.scopes = Object.keys(oAuth2Spec.scopes)
  }

  inject() {
    this.core.oauth = {}

    Object.keys(routes).forEach(namespaceName => {
      this.core.oauth[namespaceName] = {}

      Object.keys(routes[namespaceName]).forEach(apiName => {
        let apiOptions = routes[namespaceName][apiName]

        let { method, params, url, ...rest } = apiOptions

        let _paramGroups = {}
        Object.keys(params).forEach(paramName => {
          let groupName = params[paramName].in

          if (!Array.isArray(_paramGroups[groupName]))
            _paramGroups[groupName] = []
          _paramGroups[groupName].push(paramName)
        })

        this.core.oauth[namespaceName][apiName] = apiMethod.bind(
          null,
          this.core,
          { method, url, ...rest, _paramGroups },
          params
        )
      })
    })
  }
}

module.exports = OAuthPlugin
