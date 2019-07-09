const { chain, isEmpty, pick, values } = require('lodash')

const extractEndpointNamesForNamespace = (endpointNames, namespaceName) => {
  return chain(endpointNames)
    .values()
    .flatMap(values)
    .flatMap(object => pick(object, namespaceName))
    .reject(isEmpty)
    .flatMap(values)
    .compact()
    .value()
}

module.exports.extractEndpointNamesForNamespace = extractEndpointNamesForNamespace
