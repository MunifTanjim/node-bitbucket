import { factory } from './factory'

type APIClientFactory = import('./types').APIClientFactory
type Plugin = import('./types').Plugin

export function registerPlugins(
  oldPlugins: Plugin[] = [],
  newPlugins: Plugin[] = []
): APIClientFactory {
  const plugins = oldPlugins.slice(0)

  newPlugins.forEach((plugin): void => {
    if (!plugins.includes(plugin)) {
      plugins.push(plugin)
    }
  })

  return factory(plugins)
}
