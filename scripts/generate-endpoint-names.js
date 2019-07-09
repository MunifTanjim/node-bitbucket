const fs = require('fs')
const path = require('path')
const deepsort = require('deep-sort-object')

const {
  extractNamespaceFromURL
} = require('./utils/extract-namespace-from-url')

const PATHS_SPEC = require('../specification/paths.json')
const NON_METHOD_KEYS = ['parameters']

const endpointNamesPath = path.resolve(
  'specification/extras',
  'endpoint-names.json'
)

const ENDPOINT_NAMES = require(endpointNamesPath)

for (const url of Object.keys(PATHS_SPEC)) {
  const resourceNamespaceName = extractNamespaceFromURL(url)

  if (!ENDPOINT_NAMES[url]) {
    // new endpoint url
    ENDPOINT_NAMES[url] = {}
  }

  for (const method of Object.keys(PATHS_SPEC[url])) {
    if (NON_METHOD_KEYS.includes(method)) continue

    if (!ENDPOINT_NAMES[url][method]) {
      // new endpoint
      ENDPOINT_NAMES[url][method] = {}
    }

    if (!ENDPOINT_NAMES[url][method][resourceNamespaceName]) {
      // set placeholder for new endpoint name
      ENDPOINT_NAMES[url][method][resourceNamespaceName] = ''
    }

    if (!PATHS_SPEC[url][method].tags) continue

    for (const tagNamespaceName of PATHS_SPEC[url][method].tags) {
      if (!ENDPOINT_NAMES[url][method][tagNamespaceName]) {
        // set placeholder for new endpoint name
        ENDPOINT_NAMES[url][method][tagNamespaceName] = ''
      }
    }
  }
}

fs.writeFileSync(
  endpointNamesPath,
  `${JSON.stringify(deepsort(ENDPOINT_NAMES), null, 2)}\n`
)
