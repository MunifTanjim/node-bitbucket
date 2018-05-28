const _ = require('lodash')
const path = require('path')
const { writeFileSync } = require('fs')
const deepsort = require('deep-sort-object')

const { extractNamespaceFromURL } = require('./helpers')

const METHODS_LIST = require('../src/routes/methods-list.json')
const PATHS_SPEC = require('../specification/paths.json')

const methodsListPath = path.resolve('src/routes/methods-list.json')

const NON_METHODS = ['parameters']

const addMissingMethodsListItems = () => {
  _.keys(PATHS_SPEC).forEach(url => {
    let resourceNamespace = extractNamespaceFromURL(url)

    if (!METHODS_LIST[url]) {
      METHODS_LIST[url] = {}
    }

    _.keys(PATHS_SPEC[url]).forEach(method => {
      if (NON_METHODS.includes(method)) {
        return
      }

      if (!METHODS_LIST[url][method]) {
        METHODS_LIST[url][method] = {}
      }

      if (!METHODS_LIST[url][method][resourceNamespace]) {
        METHODS_LIST[url][method][resourceNamespace] = ''
      }

      if (PATHS_SPEC[url][method].tags) {
        PATHS_SPEC[url][method].tags.forEach(tagNamespace => {
          if (!METHODS_LIST[url][method][tagNamespace]) {
            METHODS_LIST[url][method][tagNamespace] = ''
          }
        })
      }
    })
  })
}

addMissingMethodsListItems()

writeFileSync(
  methodsListPath,
  `${JSON.stringify(deepsort(METHODS_LIST), null, 2)}\n`
)
