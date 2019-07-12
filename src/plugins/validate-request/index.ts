import { validate } from './validate'

type APIClient = import('./types').APIClient

function validateRequestPlugin(client: APIClient): void {
  client.requestHook.before(validate.bind(null, client))
}

export default validateRequestPlugin
