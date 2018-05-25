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

const getResourceName = apiPath => {
  return /^\/(\w+)\/?/.exec(apiPath)[1]
}

const sortObjectByKeys = object => {
  return _.chain(object)
    .toPairs()
    .sortBy(0)
    .fromPairs()
    .value()
}

module.exports = {
  extractMethodNamesForScopeFromMethodList,
  extractScopesFromMethodsList,
  getDuplicates,
  getResourceName,
  sortObjectByKeys
}
