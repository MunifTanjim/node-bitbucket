const { chain, keys, values } = require('lodash')

const extractNamespaceNames = endpointNames => {
  return chain(endpointNames)
    .values()
    .flatMap(values)
    .flatMap(keys)
    .uniq()
    .value()
}

module.exports.extractNamespaceNames = extractNamespaceNames
