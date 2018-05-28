const _ = require('lodash')
const path = require('path')
const { writeFileSync } = require('fs')

const deepmerge = require('deepmerge')

const {
  extractMethodNamesForScopeFromMethodList,
  extractScopesFromMethodsList,
  getDuplicates,
  pascalCase,
  tidyObject
} = require('./helpers')

const METHODS_LIST = require('../src/routes/methods-list.json')
const PATHS_SPEC = require('../specification/paths.json')
const ROUTES = require('../src/routes/routes.json')

const PATHS_SPEC_EXTRAS = require('../specification/overrides/paths.json')

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
    ({ name, type = 'any', enum: _enum, in: _in, required }) => {
      if (!methodObject.params[name]) methodObject.params[name] = {}

      methodObject.params[name] = deepmerge(methodObject.params[name], {
        enum: _enum,
        in: _in,
        required,
        type
      })

      methodObject.params[name].enum = _.uniq(methodObject.params[name].enum)
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

const updateRoutes = () => {
  _.each(METHODS_LIST, (methods, url) => {
    // Specification for URL
    let spec = PATHS_SPEC[url] || {}
    let specExtras = PATHS_SPEC_EXTRAS[url] || {}

    _.each(methods, (namespaces, httpMethod) => {
      _.each(namespaces, (methodName, namespaceName) => {
        // Igonre Empty MethodNames
        if (!methodName) return

        setHTTPMethod(ROUTES[namespaceName][methodName], httpMethod)
        setURL(ROUTES[namespaceName][methodName], url)

        setParameters(ROUTES[namespaceName][methodName], spec)
        if (spec[httpMethod]) {
          setConsumes(ROUTES[namespaceName][methodName], spec[httpMethod])
          setParameters(ROUTES[namespaceName][methodName], spec[httpMethod])
          setResponses(ROUTES[namespaceName][methodName], spec[httpMethod])
        }

        if (!specExtras[httpMethod]) return

        _.each(specExtras[httpMethod], (value, key) => {
          setConsumes(ROUTES[namespaceName][methodName], specExtras[httpMethod])
          setParameters(
            ROUTES[namespaceName][methodName],
            specExtras[httpMethod]
          )
          setResponses(
            ROUTES[namespaceName][methodName],
            specExtras[httpMethod]
          )
        })
      })
    })
  })
}

const recursivelyTidyObject = object => {
  _.each(object, (value, key) => {
    if (!_.isPlainObject(value)) return
    object[key] = tidyObject(value)
    recursivelyTidyObject(object[key])
  })
}

const tidyRoutesObject = routesObject => {
  return _.chain(routesObject)
    .thru(tidyObject)
    .tap(recursivelyTidyObject)
    .value()
}

initializeRoutes()
updateRoutes()

writeFileSync(
  routesPath,
  `${JSON.stringify(tidyRoutesObject(ROUTES), null, 2)}\n`
)
