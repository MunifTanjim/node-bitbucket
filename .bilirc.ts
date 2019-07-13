import { Config } from 'bili'

const config: Config = {
  input: ['src/index.ts', 'src/minimal.ts'],
  output: {
    dir: 'lib',
    format: ['cjs', 'es', 'umd'],
    minify: true,
    moduleName: 'Bitbucket',
    sourceMapExcludeSources: true
  },
  globals: {
    'node-fetch': 'fetch'
  }
}

const PLUGIN = process.env.PLUGIN

if (PLUGIN) {
  config.input = `src/plugins/${PLUGIN}/index.ts`
  config.output.dir = 'lib/plugins'
  config.output.format = 'umd'
  config.output.moduleName = `Bitbucket.Plugin.${PLUGIN}`
  config.output.fileName = `${PLUGIN}.js`
}

export default config
