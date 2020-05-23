import { Singular } from 'before-after-hook'
import { request } from '../request'
import { getEndpointOptions } from './get-endpoint-options'

type APIClient = import('./types').APIClient
type Options = import('./types').Options
type Plugin = import('./types').Plugin
type RequestHook = import('./types').RequestHook

export function constructor(
  plugins: Plugin[],
  clientOptions: Options = {}
): APIClient {
  const requestHook: RequestHook = new Singular()

  const client = {
    request: request.defaults(getEndpointOptions(clientOptions, requestHook)),
    requestHook,
  }

  plugins.forEach((plugin): void => {
    plugin(client, clientOptions)
  })

  return client
}
