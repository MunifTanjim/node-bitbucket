import { registerEndpoints } from './register-endpoints'

type APIClient = import('./types').APIClient

function registerEndpointsPlugin(client: APIClient): void {
  client.registerEndpoints = registerEndpoints.bind(null, client)
}

export default registerEndpointsPlugin
