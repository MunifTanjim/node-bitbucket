import { Config } from 'bili'

const config: Config = {
  input: ['src/index.ts', 'src/minimal.ts'],
  output: {
    dir: 'lib',
    fileName: ({ format }) => {
      return ['es', 'esm'].includes(format)
        ? `[name][min][ext]`
        : `[name][min].[format][ext]`
    },
    format: ['es', 'umd'],
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
  config.output.fileName = `${PLUGIN}[min][ext]`
}

export default config
