import { version } from '../../package.json'
import { basePath, host, schemes } from './spec.json'

type EndpointDefaults = import('./types').EndpointDefaults

export const DEFAULTS: EndpointDefaults = {
  method: `GET`,
  baseUrl: `${schemes[0]}://${host}${basePath}`,
  headers: {
    accept: `application/json`,
    'user-agent': `bitbucket.js/${version}`
  }
}
