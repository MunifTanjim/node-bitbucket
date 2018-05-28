const { compile } = require('json-schema-to-typescript')

const generateTypes = require('./generate-types')

const responseTypeDefs = require('./response-type-defs.json')

const discardRootInterface = responseTypeDefs =>
  responseTypeDefs.replace(
    /interface RootInterfaceToDiscard(?:\s|.)+?export /,
    ''
  )

const addIndentationBuffer = responseTypeDefs =>
  responseTypeDefs
    .split('\n')
    .filter(Boolean)
    .join('\n    ')

compile(responseTypeDefs, 'RootInterfaceToDiscard', {
  bannerComment: false
})
  .then(discardRootInterface)
  .then(addIndentationBuffer)
  .then(responseTypeDefs => {
    generateTypes(
      'TypeScript',
      'index.d.ts.mustache',
      'index.d.ts',
      responseTypeDefs
    )
  })
  .catch(err => console.error(err))
