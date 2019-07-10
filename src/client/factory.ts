import { constructor } from './constructor'
import { registerPlugins } from './register-plugins'

type APIClientFactory = import('./types').APIClientFactory
type Plugin = import('./types').Plugin

export function factory(plugins: Plugin[] = []): APIClientFactory {
  const Bitbucket = constructor.bind(null, plugins) as APIClientFactory
  Bitbucket.plugins = registerPlugins.bind(null, plugins)
  return Bitbucket
}
