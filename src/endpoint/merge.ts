import deepmerge from 'deepmerge'
import isPlainObject from 'is-plain-object'
import { lowerCaseHeaderFields } from '../utils/lower-case-header-fields'

type EndpointDefaults = import('./types').EndpointDefaults
type EndpointParams = import('./types').EndpointParams

export function merge(
  endpointDefaults: EndpointDefaults | null,
  endpointRoute: string | EndpointParams,
  endpointOptions?: EndpointParams
): EndpointDefaults {
  if (typeof endpointRoute === 'string') {
    const [method, url] = endpointRoute.split(' ')
    endpointOptions = Object.assign(
      url ? { method, url } : { url: method },
      endpointOptions
    )
  } else {
    endpointOptions = endpointRoute
  }

  endpointOptions.headers = lowerCaseHeaderFields(endpointOptions.headers)

  const mergedOptions = deepmerge.all(
    [endpointDefaults!, endpointOptions].filter(Boolean),
    { isMergeableObject: isPlainObject }
  ) as EndpointDefaults

  return mergedOptions
}
