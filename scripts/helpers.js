const _ = require('lodash')

const camelCase = _.camelCase

const compactObject = object => {
  return _.chain(object)
    .pickBy(o => (_.isObject(o) ? !_.isEmpty(o) : o))
    .value()
}

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

const getResourceName = apiPath => /^\/(\w+)\/?/.exec(apiPath)[1]

const pascalCase = string => _.upperFirst(_.camelCase(string))

const sortObjectByKeys = object => {
  return _.chain(object)
    .toPairs()
    .sortBy(0)
    .fromPairs()
    .value()
}

const tidyObject = object => compactObject(sortObjectByKeys(object))

module.exports = {
  camelCase,
  compactObject,
  extractMethodNamesForScopeFromMethodList,
  extractScopesFromMethodsList,
  getDuplicates,
  getResourceName,
  pascalCase,
  sortObjectByKeys,
  tidyObject
}
