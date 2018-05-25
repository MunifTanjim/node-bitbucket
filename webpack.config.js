const path = require('path')

module.exports = {
  output: {
    filename: 'bitbucket.js',
    library: 'BitBucket'
  },
  resolve: {
    alias: {
      deepmerge$: path.resolve('node_modules/deepmerge/dist/umd.js')
    }
  }
}
