const _ = require('lodash')
const path = require('path')
const { writeFileSync } = require('fs')
const deepsort = require('deep-sort-object')

const { extractNamespaceFromURL } = require('./helpers')

const API_NAMES = require('../src/routes/api-names.json')
const PATHS_SPEC = require('../specification/paths.json')

const apiNamesPath = path.resolve('src/routes/api-names.json')

const NON_METHODS = ['parameters']

const addMissingAPINamesItems = () => {
  _.keys(PATHS_SPEC).forEach(url => {
    let resourceNamespaceName = extractNamespaceFromURL(url)

    if (!API_NAMES[url]) {
      API_NAMES[url] = {}
    }

    _.keys(PATHS_SPEC[url]).forEach(method => {
      if (NON_METHODS.includes(method)) {
        return
      }

      if (!API_NAMES[url][method]) {
        API_NAMES[url][method] = {}
      }

      if (!API_NAMES[url][method][resourceNamespaceName]) {
        API_NAMES[url][method][resourceNamespaceName] = ''
      }

      if (PATHS_SPEC[url][method].tags) {
        PATHS_SPEC[url][method].tags.forEach(tagNamespaceName => {
          if (!API_NAMES[url][method][tagNamespaceName]) {
            API_NAMES[url][method][tagNamespaceName] = ''
          }
        })
      }
    })
  })
}

addMissingAPINamesItems()

writeFileSync(apiNamesPath, `${JSON.stringify(deepsort(API_NAMES), null, 2)}\n`)
