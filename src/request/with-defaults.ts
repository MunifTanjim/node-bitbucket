import { fetchWrapper } from './fetch-wrapper'

type Endpoint = import('./types').Endpoint
type EndpointDefaults = import('./types').EndpointDefaults
type EndpointOptions = import('./types').EndpointOptions
type EndpointParams = import('./types').EndpointParams
type Request = import('./types').Request

export function withDefaults(
  oldEndpoint: Endpoint,
  newDefaults: EndpointParams
): Request {
  const endpoint = oldEndpoint.defaults(newDefaults)

  function request(
    endpointRoute: string | EndpointOptions,
    endpointParams?: EndpointParams
  ): ReturnType<Request> {
    const endpointOptions = endpoint.merge(
      endpointRoute as string,
      endpointParams
    )

    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint.parse(endpointOptions))
    }

    return endpointOptions.request.hook(
      (options: EndpointDefaults): ReturnType<Request> =>
        fetchWrapper(endpoint.parse(options)),
      endpointOptions
    )
  }

  request.defaults = withDefaults.bind(null, endpoint)
  request.endpoint = endpoint

  return request
}
