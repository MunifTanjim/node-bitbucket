type APIClient = import('./types').APIClient
type Routes = import('./types').Routes
type EndpointDefaults = import('./types').EndpointDefaults

export function registerEndpoints(client: APIClient, routes: Routes): void {
  for (const namespaceName of Object.keys(routes)) {
    if (!client[namespaceName]) {
      client[namespaceName] = {}
    }

    for (const endpointName of Object.keys(routes[namespaceName])) {
      let endpointObject = routes[namespaceName][endpointName]

      if (endpointObject.alias) {
        const [namespaceAlias, apiAlias] = endpointObject.alias.split('.')
        endpointObject = routes[namespaceAlias][apiAlias]
      }

      const endpointDefaults = ['accepts', 'method', 'url', 'headers'].reduce(
        (defaults: any, key: string): any => {
          if (key in endpointObject) {
            defaults[key] = endpointObject[key as keyof typeof endpointObject]
          }
          return defaults
        },
        {}
      ) as EndpointDefaults

      endpointDefaults.request = {
        validate: endpointObject.params,
      }

      const request = client.request.defaults(endpointDefaults)

      if (endpointObject.deprecated) {
        client[namespaceName][endpointName] = function deprecatedEndpoint(
          ...args: Parameters<typeof request>
        ): ReturnType<typeof request> {
          // eslint-disable-next-line no-console
          console.log(
            `\x1b[43m\x1b[30m %s \x1b[0m\x1b[33m %s \x1b[0m`,
            `DEPRECATION WARNING:`,
            `${endpointDefaults.method} ${endpointDefaults.url as string}`
          )

          client[namespaceName][endpointName] = request

          return request(...args)
        }

        continue
      }

      client[namespaceName][endpointName] = request
    }
  }
}
