const { compile } = require('json-schema-to-typescript')

const generateTypes = require('./generate-types.js')

const typeDefs = require('./type-defs.json')

const discardRootInterface = typeDefs =>
  typeDefs.replace(/interface RootInterfaceToDiscard(?:\s|.)+?export /, '')

const addIndentationBuffer = typeDefs =>
  typeDefs
    .split('\n')
    .filter(Boolean)
    .join('\n    ')

compile(typeDefs, 'RootInterfaceToDiscard', { bannerComment: false })
  .then(discardRootInterface)
  .then(addIndentationBuffer)
  .then(typesBlob =>
    generateTypes('TypeScript', 'index.d.ts.mustache', 'index.d.ts', typesBlob)
  )
  .catch(err => console.error(err))
