function registerEndpoints(client, routes) {
  Object.keys(routes).forEach(namespaceName => {
    if (!client[namespaceName]) {
      client[namespaceName] = {}
    }

    Object.keys(routes[namespaceName]).forEach(endpointName => {
      let endpointObject = routes[namespaceName][endpointName]

      if (endpointObject.alias) {
        let [namespaceAlias, apiAlias] = endpointObject.alias.split('.')
        endpointObject = routes[namespaceAlias][apiAlias]
      }

      const endpointDefaults = ['accepts', 'method', 'url', 'headers'].reduce(
        (defaults, key) => {
          if (endpointObject[key]) {
            defaults[key] = endpointObject[key]
          }

          return defaults
        },
        {}
      )

      endpointDefaults.request = {
        validate: endpointObject.params
      }

      let request = client.request.defaults(endpointDefaults)

      if (endpointObject.deprecated) {
        client[namespaceName][endpointName] = function deprecatedEndpointMethod(
          ...args
        ) {
          console.log(
            `\x1b[43m\x1b[30m %s \x1b[0m\x1b[33m %s \x1b[0m`,
            `DEPRECATION WARNING:`,
            `${endpointDefaults.method} ${endpointDefaults.url}`
          )

          client[namespaceName][endpointName] = request

          return request(...args)
        }

        return
      }

      client[namespaceName][endpointName] = request
    })
  })
}

module.exports = registerEndpoints
