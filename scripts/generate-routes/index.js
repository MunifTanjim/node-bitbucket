const deepclean = require('clean-deep')
const deepsort = require('deep-sort-object')
const { writeFileSync } = require('fs')
const get = require('lodash/get')
const path = require('path')

const {
  extractEndpointNamesForNamespace
} = require('../utils/extract-endpoint-names-for-namespace')
const {
  extractNamespaceFromURL
} = require('../utils/extract-namespace-from-url')
const { extractNamespaceNames } = require('../utils/extract-namespace-names')
const { getDuplicates } = require('../utils/get-duplicates')
const { isPaginatedEndpoint } = require('../utils/is-paginated-endpoint')

const PATHS_SPEC = require('../../specification/paths.json')
const PATHS_SPEC_EXTRAS = require('../../specification/extras/paths.json')
const ENDPOINT_NAMES = require('../../specification/extras/endpoint-names.json')

const routesPath = path.resolve(
  'src/plugins/register-api-endpoints/routes.json'
)

const { processConsumes } = require('./process-consumes')
const { processDeprecated } = require('./process-deprecated')
const { processParameters } = require('./process-parameters')
const { processProduces } = require('./process-produces')
const { processResponses } = require('./process-responses')
const { setAlias } = require('./set-alias')
const { setMethod } = require('./set-method')
const { setUrl } = require('./set-url')

function initializeRoutes(routesObject) {
  const namespaceNames = extractNamespaceNames(ENDPOINT_NAMES)

  namespaceNames.forEach(namespaceName => {
    routesObject[namespaceName] = {}

    const endpointNames = extractEndpointNamesForNamespace(
      ENDPOINT_NAMES,
      namespaceName
    )

    const duplicateEndpointNames = getDuplicates(endpointNames)
    if (duplicateEndpointNames.length) {
      throw new Error(
        `namespace:[${namespaceName}] contains duplicate endpoint names: [${duplicateEndpointNames}]`
      )
    }

    endpointNames.forEach(methodName => {
      routesObject[namespaceName][methodName] = {
        params: {}
      }
    })
  })
}

function populateRoutes(routesObject) {
  const usernameRegex = /\/\{username\}\//

  for (const [url, methods] of Object.entries(ENDPOINT_NAMES)) {
    //   if spec for  */{username}/* path does not exist
    // then spec for */{workspace}/* path will be tried

    const spec = get(
      PATHS_SPEC,
      url,
      usernameRegex.test(url)
        ? get(PATHS_SPEC, url.replace(usernameRegex, '/{workspace}/'))
        : null
    )

    const specExtras = get(
      PATHS_SPEC_EXTRAS,
      url,
      usernameRegex.test(url)
        ? get(PATHS_SPEC_EXTRAS, url.replace(usernameRegex, '/{workspace}/'))
        : null
    )

    for (const [method, namespaces] of Object.entries(methods)) {
      for (const [namespaceName, endpointName] of Object.entries(namespaces)) {
        // ignore endpoint with empty name
        if (!endpointName) continue

        const isAlias = setAlias(
          routesObject[namespaceName][endpointName],
          namespaceName,
          extractNamespaceFromURL(url),
          get(ENDPOINT_NAMES, [url, method])
        )

        // ignore further processing for alias endpoint
        if (isAlias) continue

        setMethod(routesObject[namespaceName][endpointName], method)
        setUrl(routesObject[namespaceName][endpointName], url)

        processParameters(routesObject[namespaceName][endpointName], spec)

        const methodSpec = get(spec, method)
        if (methodSpec) {
          processConsumes(routesObject[namespaceName][endpointName], methodSpec)
          processProduces(routesObject[namespaceName][endpointName], methodSpec)
          processParameters(
            routesObject[namespaceName][endpointName],
            methodSpec
          )
          processResponses(
            routesObject[namespaceName][endpointName],
            methodSpec
          )
          processDeprecated(
            routesObject[namespaceName][endpointName],
            methodSpec
          )
        }

        const methodSpecExtras = get(specExtras, method)
        if (methodSpecExtras) {
          processConsumes(
            routesObject[namespaceName][endpointName],
            methodSpecExtras
          )
          processProduces(
            routesObject[namespaceName][endpointName],
            methodSpecExtras
          )
          processParameters(
            routesObject[namespaceName][endpointName],
            methodSpecExtras
          )
          processResponses(
            routesObject[namespaceName][endpointName],
            methodSpecExtras
          )
          processDeprecated(
            routesObject[namespaceName][endpointName],
            methodSpecExtras
          )
        }
      }
    }
  }
}

function formatUrls(routesObject) {
  for (const [, endpoints] of Object.entries(routesObject)) {
    for (const [endpointName, endpointObject] of Object.entries(endpoints)) {
      // ignore alias endpoint
      if (endpointObject.alias) continue

      // ignore endpoint with method GET/DELETE
      if (['GET', 'DELETE'].includes(endpointObject.method)) continue

      if (isPaginatedEndpoint(endpointName, endpointObject)) {
        processParameters(endpointObject, {
          parameters: [
            { in: 'query', name: 'page', require: false, type: 'string' },
            { in: 'query', name: 'pagelen', required: false, type: 'integer' },
            { in: 'query', name: 'q', required: false, type: 'string' },
            { in: 'query', name: 'sort', required: false, type: 'string' }
          ]
        })
      }

      const queryParams = Object.keys(endpointObject.params).filter(
        paramName => endpointObject.params[paramName].in === 'query'
      )

      if (queryParams.length) {
        const queryTemplate = `{?${queryParams.join(',')}}`
        endpointObject.url = `${endpointObject.url}${queryTemplate}`
      }
    }
  }
}

function cleanupParams(routesObject) {
  const unnecessaryParamNames = ['page', 'pagelen', 'q', 'sort', 'fields']

  for (const [, endpoints] of Object.entries(routesObject)) {
    for (const [, endpointObject] of Object.entries(endpoints)) {
      // ignore alias endpoint
      if (endpointObject.alias) continue

      // delete unnecessary params
      for (const paramName of Object.keys(endpointObject.params)) {
        if (unnecessaryParamNames.includes(paramName)) {
          delete endpointObject.params[paramName]
        }
      }

      // delete unnecessary properties from params
      for (const paramName of Object.keys(endpointObject.params)) {
        delete endpointObject.params[paramName].in
      }
    }
  }
}

function generateRoutes() {
  const routesObject = {}

  initializeRoutes(routesObject)
  populateRoutes(routesObject)
  formatUrls(routesObject)
  cleanupParams(routesObject)

  return routesObject
}

writeFileSync(
  routesPath,
  `${JSON.stringify(deepsort(deepclean(generateRoutes())), null, 2)}\n`
)
