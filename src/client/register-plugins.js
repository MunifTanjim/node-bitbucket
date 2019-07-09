const factory = require('./factory')

function registerPlugins(oldPlugins = [], newPlugins = []) {
  const plugins = oldPlugins.slice(0)

  newPlugins.forEach(plugin => {
    if (!plugins.includes(plugin)) plugins.push(plugin)
  })

  return factory(plugins)
}

module.exports = registerPlugins
