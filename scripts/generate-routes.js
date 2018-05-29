const _ = require('lodash')
const path = require('path')
const { writeFileSync } = require('fs')

const deepclean = require('clean-deep')
const deepsort = require('deep-sort-object')
const deepmerge = require('../src/utils/deepmerge')

const {
  extractMethodNamesForScopeFromMethodList,
  extractScopesFromMethodsList,
  getDuplicates,
  pascalCase
} = require('./helpers')

const METHODS_LIST = require('../src/routes/methods-list.json')
const PATHS_SPEC = require('../specification/paths.json')

const PATHS_SPEC_EXTRAS = require('../specification/extras/paths.json')

const routesPath = path.resolve('src/routes/routes.json')

const routesObject = {}

const initializeRoutes = routesObject => {
  const namespaces = extractScopesFromMethodsList(METHODS_LIST)

  _.each(namespaces, namespaceName => {
    // Initialize Namespace
    routesObject[namespaceName] = {}

    let methodNames = extractMethodNamesForScopeFromMethodList(
      METHODS_LIST,
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
        method: '',
        params: {},
        url: ''
      }
    })
  })
}

const setConsumes = (methodObject, { consumes = [] }) => {
  if (!methodObject.accepts) methodObject.accepts = []
  methodObject.accepts = _.uniq(methodObject.accepts.concat(...consumes))
}

const setHTTPMethod = (methodObject, httpMethod) => {
  methodObject.method = httpMethod.toUpperCase()
}

const setParameters = (methodObject, { parameters = [] }) => {
  _.each(
    parameters,
    ({ enum: _enum, in: _in, name, required, schema = {}, type = 'any' }) => {
      if (!methodObject.params[name]) methodObject.params[name] = {}

      methodObject.params[name] = deepmerge(methodObject.params[name], {
        enum: _enum,
        in: _in,
        type
      })

      if (required) methodObject.params[name].required = required

      methodObject.params[name].enum = _.uniq(methodObject.params[name].enum)

      if (type === 'any' && schema.$ref) {
        methodObject.params[name].schema = pascalCase(
          schema.$ref.replace('#/definitions/', '')
        )
      }
    }
  )
}

const setResponses = (methodObject, { responses = [] }) => {
  _.each(responses, (response, code) => {
    if (Number(code) < 400) {
      if (!response.schema) return
      methodObject.returns = pascalCase(
        response.schema.$ref.replace('#/definitions/', '')
      )
    }
  })
}

const setURL = (methodObject, url) => {
  methodObject.url = url
}

const updateRoutes = routesObject => {
  _.each(METHODS_LIST, (methods, url) => {
    // Specification for URL
    let spec = PATHS_SPEC[url] || {}
    let specExtras = PATHS_SPEC_EXTRAS[url] || {}

    _.each(methods, (namespaces, httpMethod) => {
      _.each(namespaces, (methodName, namespaceName) => {
        // Igonre Empty MethodNames
        if (!methodName) return

        setHTTPMethod(routesObject[namespaceName][methodName], httpMethod)
        setURL(routesObject[namespaceName][methodName], url)

        setParameters(routesObject[namespaceName][methodName], spec)
        if (spec[httpMethod]) {
          setConsumes(routesObject[namespaceName][methodName], spec[httpMethod])
          setParameters(
            routesObject[namespaceName][methodName],
            spec[httpMethod]
          )
          setResponses(
            routesObject[namespaceName][methodName],
            spec[httpMethod]
          )
        }

        if (!specExtras[httpMethod]) return

        _.each(specExtras[httpMethod], (value, key) => {
          setConsumes(
            routesObject[namespaceName][methodName],
            specExtras[httpMethod]
          )
          setParameters(
            routesObject[namespaceName][methodName],
            specExtras[httpMethod]
          )
          setResponses(
            routesObject[namespaceName][methodName],
            specExtras[httpMethod]
          )
        })
      })
    })
  })
}

const addFilterAndSortParams = routesObject => {
  _.each(routesObject, (namespaces, namespaceName) => {
    _.each(namespaces, (methodObject, methodName) => {
      if (methodObject.returns && /^paginated/i.test(methodObject.returns)) {
        setParameters(methodObject, {
          parameters: [
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
