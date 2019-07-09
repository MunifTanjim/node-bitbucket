module.exports = factory

const constructor = require('./constructor')
const registerPlugins = require('./register-plugins')

function factory(plugins = []) {
  const Bitbucket = constructor.bind(null, plugins)
  Bitbucket.plugins = registerPlugins.bind(null, plugins)
  return Bitbucket
}
