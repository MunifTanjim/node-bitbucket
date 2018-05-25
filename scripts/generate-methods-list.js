const _ = require('lodash')
const path = require('path')
const { writeFileSync } = require('fs')

const { getResourceName, sortObjectByKeys } = require('./helpers')

const METHODS_LIST = require('../src/routes/methods-list.json')
const PATHS_SPEC = require('../specification/paths.json')

const methodsListPath = path.resolve('src/routes/methods-list.json')

const NON_METHODS = ['parameters']

const updateMethodsList = () => {
  Object.keys(PATHS_SPEC).forEach(apiPath => {
    let resourceName = getResourceName(apiPath)

    if (!_.has(METHODS_LIST, apiPath)) {
      METHODS_LIST[apiPath] = {}
    }

    Object.keys(PATHS_SPEC[apiPath]).forEach(method => {
      if (NON_METHODS.includes(method)) {
        return
      }

      if (!_.has(METHODS_LIST[apiPath], method)) {
        METHODS_LIST[apiPath][method] = {}
      }

      if (!METHODS_LIST[apiPath][method][resourceName]) {
        METHODS_LIST[apiPath][method][resourceName] = ''
      }

      if (_.has(PATHS_SPEC[apiPath][method], 'tags')) {
        PATHS_SPEC[apiPath][method].tags.forEach(tag => {
          if (!METHODS_LIST[apiPath][method][tag]) {
            METHODS_LIST[apiPath][method][tag] = ''
          }
        })
      }
    })
  })
}

const sortMethodsListObject = methodsListObject => {
  return _.chain(methodsListObject)
    .thru(sortObjectByKeys)
    .tap(apiPathObjects => {
      _.each(apiPathObjects, (apiPathObject, apiPath) => {
        apiPathObjects[apiPath] = sortObjectByKeys(apiPathObject)
        _.each(apiPathObjects[apiPath], (methodObject, method) => {
          apiPathObjects[apiPath][method] = sortObjectByKeys(methodObject)
        })
      })
    })
    .value()
}

updateMethodsList()

writeFileSync(
  methodsListPath,
  `${JSON.stringify(sortMethodsListObject(METHODS_LIST), null, 2)}\n`
)
