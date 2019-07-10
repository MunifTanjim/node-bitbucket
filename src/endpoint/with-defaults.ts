import { endpointWithDefaults } from './endpoint-with-defaults'
import { merge } from './merge'
import { parse } from './parse'

type Endpoint = import('./types').Endpoint
type EndpointDefaults = import('./types').EndpointDefaults
type EndpointParams = import('./types').EndpointParams

export function withDefaults(
  oldDefaults: EndpointDefaults | null,
  newDefaults: EndpointParams
): Endpoint {
  const DEFAULTS = merge(oldDefaults, newDefaults)
  const endpoint = endpointWithDefaults.bind(null, DEFAULTS) as Endpoint

  endpoint.DEFAULTS = DEFAULTS
  endpoint.defaults = withDefaults.bind(null, DEFAULTS)
  endpoint.merge = merge.bind(null, DEFAULTS)
  endpoint.parse = parse

  return endpoint
}
