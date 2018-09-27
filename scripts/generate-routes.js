const _ = require('lodash')
const path = require('path')
const { writeFileSync } = require('fs')

const deepclean = require('clean-deep')
const deepsort = require('deep-sort-object')
const deepmerge = require('../src/utils/deepmerge.js')

const {
  extractMethodNamesForScopeFromMethodList,
  extractNamespaceFromURL,
  extractScopesFromMethodsList,
  getDuplicates,
  pascalCase
} = require('./helpers.js')

const API_NAMES = require('../src/routes/api-names.json')
const PATHS_SPEC = require('../specification/paths.json')

const PATHS_SPEC_EXTRAS = require('../specification/extras/paths.json')

const routesPath = path.resolve('src/routes/routes.json')

const routesObject = {}

const initializeRoutes = routesObject => {
  const namespaces = extractScopesFromMethodsList(API_NAMES)

  _.each(namespaces, namespaceName => {
    // Initialize Namespace
    routesObject[namespaceName] = {}

    let methodNames = extractMethodNamesForScopeFromMethodList(
      API_NAMES,
      namespaceName
    )

    // Check for duplicate MethodNames
    let duplicates = getDuplicates(methodNames)
    if (duplicates.length) {
      throw new Error(
        `Duplicate MethodNames:[${duplicates}] in Scope:[${namespaceName}]`
      )
    }

    // Initialize MethodNames
    _.each(methodNames, methodName => {
      routesObject[namespaceName][methodName] = {
        params: {}
      }
    })
  })
}

const setAlias = (apiObject, namespaceName, resourceName, namesList) => {
  if (namespaceName !== resourceName && namesList[resourceName]) {
    apiObject.alias = `${resourceName}.${namesList[resourceName]}`
    return true
  }

  return false
}

const setConsumes = (apiObject, { consumes = [] }) => {
  if (!apiObject.accepts) apiObject.accepts = []
  apiObject.accepts = _.uniq(apiObject.accepts.concat(...consumes))
}

const setHTTPMethod = (apiObject, method) => {
  apiObject.method = method.toUpperCase()
}

const setParameters = (apiObject, { parameters = [] }) => {
  _.each(
    parameters,
    ({ enum: _enum, in: _in, name, required, schema = {}, type = 'any' }) => {
      if (!apiObject.params[name]) apiObject.params[name] = {}

      apiObject.params[name] = deepmerge(apiObject.params[name], {
        enum: _enum,
        in: _in,
        type
      })

      if (required) apiObject.params[name].required = required

      apiObject.params[name].enum = _.uniq(apiObject.params[name].enum)

      if (type === 'any' && schema.$ref) {
        apiObject.params[name].schema = pascalCase(
          schema.$ref.replace('#/definitions/', '')
        )
      }
    }
  )
}

const setResponses = (apiObject, { responses = [] }) => {
  _.each(responses, (response, code) => {
    if (Number(code) < 400) {
      if (!response.schema) return
      apiObject.returns = pascalCase(
        response.schema.$ref.replace('#/definitions/', '')
      )
    }
  })
}

const setURL = (apiObject, url) => {
  apiObject.url = url
}

const updateRoutes = routesObject => {
  _.each(API_NAMES, (methods, url) => {
    // Specification for URL
    let spec = PATHS_SPEC[url] || {}
    let specExtras = PATHS_SPEC_EXTRAS[url] || {}

    _.each(methods, (namespaces, method) => {
      _.each(namespaces, (apiName, namespaceName) => {
        // Igonre Empty MethodNames
        if (!apiName) return

        if (
          setAlias(
            routesObject[namespaceName][apiName],
            namespaceName,
            extractNamespaceFromURL(url),
            API_NAMES[url][method]
          )
        ) {
          return
        }

        setHTTPMethod(routesObject[namespaceName][apiName], method)
        setURL(routesObject[namespaceName][apiName], url)

        setParameters(routesObject[namespaceName][apiName], spec)
        if (spec[method]) {
          setConsumes(routesObject[namespaceName][apiName], spec[method])
          setParameters(routesObject[namespaceName][apiName], spec[method])
          setResponses(routesObject[namespaceName][apiName], spec[method])
        }

        if (!specExtras[method]) return

        _.each(specExtras[method], (value, key) => {
          setConsumes(routesObject[namespaceName][apiName], specExtras[method])
          setParameters(
            routesObject[namespaceName][apiName],
            specExtras[method]
          )
          setResponses(routesObject[namespaceName][apiName], specExtras[method])
        })
      })
    })
  })
}

const addFilterAndSortParams = routesObject => {
  _.each(routesObject, (namespaces, namespaceName) => {
    _.each(namespaces, (apiObject, apiName) => {
      if (apiObject.alias) return

      let isPaginatedList = /^list/i.test(apiName)
      let returnsPaginated =
        apiObject.returns && /^paginated/i.test(apiObject.returns)

      if (isPaginatedList || returnsPaginated) {
        setParameters(apiObject, {
          parameters: [
            { in: 'query', name: 'page', require: false, type: 'string' },
            { in: 'query', name: 'q', required: false, type: 'string' },
            { in: 'query', name: 'sort', required: false, type: 'string' }
          ]
        })
      }
    })
  })
}

initializeRoutes(routesObject)
updateRoutes(routesObject)
addFilterAndSortParams(routesObject)

writeFileSync(
  routesPath,
  `${JSON.stringify(deepsort(deepclean(routesObject)), null, 2)}\n`
)
