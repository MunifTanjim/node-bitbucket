import ROUTES from './routes.json'

type APIClient = import('./types').APIClient

function registerApiEndpointsPlugin(client: APIClient): void {
  client.registerEndpoints(ROUTES)
}

export default registerApiEndpointsPlugin
