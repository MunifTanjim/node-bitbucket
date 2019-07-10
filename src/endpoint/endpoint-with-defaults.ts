import { merge } from './merge'
import { parse } from './parse'

type EndpointDefaults = import('./types').EndpointDefaults
type EndpointOptions = import('./types').EndpointOptions
type EndpointParams = import('./types').EndpointParams
type RequestOptions = import('./types').RequestOptions

export function endpointWithDefaults(
  endpointDefaults: EndpointDefaults,
  endpointRoute: string | EndpointOptions,
  endpointOptions?: EndpointParams
): RequestOptions {
  return parse(merge(endpointDefaults, endpointRoute, endpointOptions))
}
