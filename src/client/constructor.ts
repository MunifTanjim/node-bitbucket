import { Singular } from 'before-after-hook'
import { request } from '../request'
import { getEndpointOptions } from './get-endpoint-options'

type APIClient = import('./types').APIClient
type BitbucketOptions = import('./types').BitbucketOptions
type Plugin = import('./types').Plugin
type RequestHook = import('./types').RequestHook

export function constructor(
  plugins: Plugin[],
  clientOptions: BitbucketOptions = {}
): APIClient {
  const requestHook: RequestHook = new Singular()
  const requestDefaults = getEndpointOptions(clientOptions, requestHook)

  const client: APIClient = {
    // eslint-disable-next-line @typescript-eslint/require-await
    auth: async () => ({
      type: 'unauthenticated',
    }),
    request: request.defaults(requestDefaults),
    requestHook,
  }

  plugins.forEach((plugin): void => {
    plugin(client, clientOptions)
  })

  return client
}
