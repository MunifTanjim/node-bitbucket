const _ = require('lodash')
const path = require('path')
const { writeFileSync } = require('fs')

const METHOD_NAMES = require('../libs/routes/methods-list')
const API_PATHS = require('../api-spec/paths')

const NON_METHODS = ['parameters']

const getResourceName = api_path => {
  return /^\/(\w+)\/?/.exec(api_path)[1]
}

const sortObjectByKeys = object => {
  return _.chain(object)
    .toPairs()
    .sortBy(0)
    .fromPairs()
    .value()
}

const methodsListPath = path.resolve('libs/routes/methods-list.json')

// Update METHOD_NAMES object
Object.keys(API_PATHS).forEach(api_path => {
  let resource = getResourceName(api_path)

  if (!_.has(METHOD_NAMES, api_path)) {
    METHOD_NAMES[api_path] = {}
  }

  Object.keys(API_PATHS[api_path]).forEach(method => {
    if (NON_METHODS.includes(method) || _.has(METHOD_NAMES[api_path], method)) {
      return
    }

    METHOD_NAMES[api_path][method] = { [resource]: '' }

    if (_.has(API_PATHS[api_path][method], 'tags')) {
      API_PATHS[api_path][method].tags.forEach(tag => {
        if (!_.has(METHOD_NAMES[api_path][method], tag))
          METHOD_NAMES[api_path][method][tag] = ''
      })
    }
  })
})

// Sort METHOD_NAMES[api_path] objects
Object.keys(METHOD_NAMES).forEach(api_path => {
  METHOD_NAMES[api_path] = sortObjectByKeys(METHOD_NAMES[api_path])
})

writeFileSync(
  methodsListPath,
  `${JSON.stringify(sortObjectByKeys(METHOD_NAMES), null, 2)}\n`
)
