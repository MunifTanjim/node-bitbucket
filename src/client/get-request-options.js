const deepmerge = require('deepmerge')
const isPlainObject = require('is-plain-object')

const { lowerCaseHeaderFields } = require('../utils/lower-case-header-fields')
const { pick } = require('./utils/pick')

function getRequestOptions(clientOptions, hook) {
  clientOptions.headers = lowerCaseHeaderFields(clientOptions.headers)

  const requestOptions = deepmerge(
    { headers: {}, request: {} },
    pick(clientOptions, ['baseUrl', 'headers', 'request']),
    { isMergeableObject: isPlainObject }
  )

  requestOptions.request.hook = hook.bind(null, 'request')

  return requestOptions
}

module.exports = getRequestOptions
