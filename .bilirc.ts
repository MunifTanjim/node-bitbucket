import { Config } from 'bili'

const config: Config = {
  input: `src/index.ts`,
  output: {
    dir: `lib`,
    moduleName: `Bitbucket`,
    sourceMap: false
  },
  globals: {}
}

export default config
