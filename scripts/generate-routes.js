const _ = require('lodash')
const path = require('path')
const writeFileSync = require('fs').writeFileSync

const API_SPEC_PATHS = require('../api-spec/paths')
const METHODS_LIST = require('../libs/routes/methods-list')
const ROUTES = require('../libs/routes/routes')

const routesPath = path.resolve('libs/routes/routes.json')

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

const getDuplicates = array => {
  return _.chain(array)
    .filter((value, index, iteratee) => _.includes(iteratee, value, index + 1))
    .uniq()
    .value()
}

const extractScopes = () => {
  return _.chain(METHODS_LIST)
    .values()
    .flatMap(_.values)
    .flatMap(_.keys)
    .uniq()
    .value()
}

const extractMethodNames = scope => {
  return _.chain(METHODS_LIST)
    .values()
    .flatMap(_.values)
    .flatMap(o => _.pick(o, scope))
    .reject(_.isEmpty)
    .flatMap(_.values)
    .compact()
    .value()
}

const initializeRoutes = () => {
  const scopes = extractScopes()

  _.each(scopes, scope => {
    // Initialize Scopes
    if (!_.has(ROUTES, scope)) {
      ROUTES[scope] = {}
    }

    let methodNames = extractMethodNames(scope)

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
  _.each(
    parameters,
    ({ name, type, enum: paramEnum, in: paramIn, required }) => {
      methodObject.params[name] = { in: paramIn, type }
      if (required) methodObject.params[name].required = required
      if (paramEnum) methodObject.params[name].enum = paramEnum
    }
  )
}

const setURL = (methodObject, url) => {
  methodObject.url = url
}

const updateRoutes = () => {
  _.each(METHODS_LIST, (methods, url) => {
    // Specification for URL
    let spec = API_SPEC_PATHS[url] || {}

    _.each(methods, (scopes, httpMethod) => {
      _.each(scopes, (methodName, scope) => {
        // Igonre Empty MethodNames
        if (!methodName) return

        setHTTPMethod(ROUTES[scope][methodName], httpMethod)

        setParameters(ROUTES[scope][methodName], spec.parameters)
        if (spec[httpMethod]) {
          setParameters(ROUTES[scope][methodName], spec[httpMethod].parameters)
        }

        setURL(ROUTES[scope][methodName], url)
      })
    })
  })
}

const sortRoutesObject = routes => {
  return _.chain(routes)
    .thru(sortObjectByKeys)
    .tap(scopes => {
      _.each(scopes, (scopeObject, scope) => {
        scopes[scope] = sortObjectByKeys(scopeObject)
        _.each(scopes[scope], (methodObject, method) => {
          scopes[scope][method].params = sortObjectByKeys(methodObject.params)
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
