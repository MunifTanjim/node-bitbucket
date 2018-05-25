const _ = require('lodash')
const path = require('path')
const { writeFileSync } = require('fs')

const {
  extractMethodNamesForScopeFromMethodList,
  extractScopesFromMethodsList,
  getDuplicates,
  sortObjectByKeys
} = require('./helpers')

const METHODS_LIST = require('../src/routes/methods-list.json')
const PATHS_SPEC = require('../specification/paths.json')
const ROUTES = require('../src/routes/routes.json')

const routesPath = path.resolve('src/routes/routes.json')

const initializeRoutes = () => {
  const scopes = extractScopesFromMethodsList(METHODS_LIST)

  _.each(scopes, scope => {
    // Initialize Scopes
    if (!_.has(ROUTES, scope)) {
      ROUTES[scope] = {}
    }

    let methodNames = extractMethodNamesForScopeFromMethodList(
      METHODS_LIST,
      scope
    )

    // Check for duplicate MethodNames
    let duplicates = getDuplicates(methodNames)
    if (duplicates.length) {
      throw new Error(
        `Duplicate MethodNames:[${duplicates}] in Scope:[${scope}]`
      )
    }

    // Initialize MethodNames
    _.each(methodNames, methodName => {
      if (!_.has(ROUTES[scope], methodName)) {
        ROUTES[scope][methodName] = {
          method: '',
          params: {},
          url: ''
        }
      }
    })
  })
}

const setHTTPMethod = (methodObject, httpMethod) => {
  methodObject.method = httpMethod.toUpperCase()
}

const setParameters = (methodObject, parameters) => {
  _.each(parameters, ({ name, type, enum: _enum, in: _in, required }) => {
    methodObject.params[name] = {}
    if (_enum) methodObject.params[name].enum = _enum
    if (_in) methodObject.params[name].in = _in
    if (required) methodObject.params[name].required = required
    if (type) methodObject.params[name].type = type
  })
}

const setURL = (methodObject, url) => {
  methodObject.url = url
}

const updateRoutes = () => {
  _.each(METHODS_LIST, (methods, url) => {
    // Specification for URL
    let spec = PATHS_SPEC[url] || {}

    _.each(methods, (namespaces, httpMethod) => {
      _.each(namespaces, (methodName, namespaceName) => {
        // Igonre Empty MethodNames
        if (!methodName) return

        setHTTPMethod(ROUTES[namespaceName][methodName], httpMethod)

        setParameters(ROUTES[namespaceName][methodName], spec.parameters)
        if (spec[httpMethod]) {
          setParameters(
            ROUTES[namespaceName][methodName],
            spec[httpMethod].parameters
          )
        }

        setURL(ROUTES[namespaceName][methodName], url)
      })
    })
  })
}

const sortRoutesObject = routesObject => {
  return _.chain(routesObject)
    .thru(sortObjectByKeys)
    .tap(namespaces => {
      _.each(namespaces, (namespace, namespaceName) => {
        namespaces[namespaceName] = sortObjectByKeys(namespace)
        _.each(namespaces[namespaceName], (methodObject, method) => {
          namespaces[namespaceName][method].params = sortObjectByKeys(
            methodObject.params
          )
        })
      })
    })
    .value()
}

initializeRoutes()
updateRoutes()

writeFileSync(
  routesPath,
  `${JSON.stringify(sortRoutesObject(ROUTES), null, 2)}\n`
)
