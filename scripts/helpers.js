const _ = require('lodash')

const extractMethodNamesForScopeFromMethodList = (methodsList, scope) => {
  return _.chain(methodsList)
    .values()
    .flatMap(_.values)
    .flatMap(o => _.pick(o, scope))
    .reject(_.isEmpty)
    .flatMap(_.values)
    .compact()
    .value()
}

const extractScopesFromMethodsList = methodsList => {
  return _.chain(methodsList)
    .values()
    .flatMap(_.values)
    .flatMap(_.keys)
    .uniq()
    .value()
}

const getDuplicates = array => {
  return _.chain(array)
    .filter((value, index, iteratee) => _.includes(iteratee, value, index + 1))
    .uniq()
    .value()
}

const extractNamespaceFromURL = url => /^\/(\w+)\/?/.exec(url)[1]

const pascalCase = string => _.upperFirst(_.camelCase(string))

module.exports = {
  extractMethodNamesForScopeFromMethodList,
  extractNamespaceFromURL,
  extractScopesFromMethodsList,
  getDuplicates,
  pascalCase
}
