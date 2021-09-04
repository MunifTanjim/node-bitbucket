const path = require('path')
const deepsort = require('deep-sort-object')
const get = require('lodash/get')

const {
  extractNamespaceFromURL,
} = require('./utils/extract-namespace-from-url')
const { writeToFile } = require('./utils/write-to-file')

const PATHS_SPEC = require('../specification/paths.json')
const NON_METHOD_KEYS = ['parameters']

const endpointNamesPath = path.resolve(
  'specification/extras',
  'endpoint-names.json'
)

const ENDPOINT_NAMES = require(endpointNamesPath)

const workspaceRegex = /\/\{workspace\}/

// trying to dodge the ever moving breaking changes
const namespaceNameMap = {
  branch_restrictions: 'branchrestrictions',
  commit_statuses: 'commitstatuses',
}

const formatNamespaceName = (namespaceName) => {
  const name = namespaceName.toLowerCase().replace(/ /g, '_')
  return namespaceNameMap[name] || name
}

for (const url of Object.keys(PATHS_SPEC)) {
  const resourceNamespaceName = formatNamespaceName(
    extractNamespaceFromURL(url)
  )

  if (!ENDPOINT_NAMES[url]) {
    // new endpoint url
    ENDPOINT_NAMES[url] = {}
  }

  if (workspaceRegex.test(url)) {
    const legacyUsernameUrl = url.replace(workspaceRegex, '/{username}')

    const legacyUsernameEndpointNames = get(ENDPOINT_NAMES, legacyUsernameUrl)

    if (legacyUsernameEndpointNames) {
      ENDPOINT_NAMES[url] = legacyUsernameEndpointNames
      delete ENDPOINT_NAMES[legacyUsernameUrl]
    }
  }

  for (const method of Object.keys(PATHS_SPEC[url])) {
    if (NON_METHOD_KEYS.includes(method)) continue

    if (!ENDPOINT_NAMES[url][method]) {
      // new endpoint
      ENDPOINT_NAMES[url][method] = {}
    }

    const endpointName = PATHS_SPEC[url][method].operationId || ''

    if (!ENDPOINT_NAMES[url][method][resourceNamespaceName]) {
      ENDPOINT_NAMES[url][method][resourceNamespaceName] = endpointName
    }

    if (!PATHS_SPEC[url][method].tags) continue

    for (const tagNamespaceName of PATHS_SPEC[url][method].tags.map(
      formatNamespaceName
    )) {
      if (!ENDPOINT_NAMES[url][method][tagNamespaceName]) {
        ENDPOINT_NAMES[url][method][tagNamespaceName] = endpointName
      }
    }
  }
}

const existingEndpointUrls = Object.keys(PATHS_SPEC)
const nonExistentEndpointUrls = Object.keys(ENDPOINT_NAMES).filter(
  (url) => !existingEndpointUrls.includes(url)
)

if (nonExistentEndpointUrls.length !== 0) {
  throw new Error(
    [
      `Non-existent URLs:`,
      ...nonExistentEndpointUrls.map((url) => `- ${url}`),
    ].join('\n')
  )
}

writeToFile(
  endpointNamesPath,
  JSON.stringify(deepsort(ENDPOINT_NAMES), null, 2)
).catch((err) => {
  console.error(err)
  process.exit(1)
})
