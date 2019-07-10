import deepmerge from 'deepmerge'
import isPlainObject from 'is-plain-object'
import { lowerCaseHeaderFields } from '../utils/lower-case-header-fields'
import { pick } from './utils/pick'

type EndpointParams = import('../endpoint/types').EndpointParams
type Options = import('./types').Options
type RequestHook = import('./types').RequestHook

export function getEndpointOptions(
  clientOptions: Options,
  hook: RequestHook
): EndpointParams {
  clientOptions.headers = lowerCaseHeaderFields(clientOptions.headers)

  const endpointOptions = deepmerge(
    { headers: {}, request: {} },
    pick(clientOptions, ['baseUrl', 'headers', 'request']),
    { isMergeableObject: isPlainObject }
  )

  endpointOptions.request.hook = hook

  return endpointOptions
}
