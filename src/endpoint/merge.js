const deepmerge = require('deepmerge')
const isPlainObject = require('is-plain-object')
const { lowerCaseHeaderFields } = require('../utils/lower-case-header-fields')

function merge(endpointDefaults, endpointRoute, endpointOptions) {
  if (typeof endpointRoute === 'string') {
    const [method, url] = endpointRoute.split(' ')
    endpointOptions = Object.assign(
      url ? { method, url } : { url: method },
      endpointOptions
    )
  } else {
    endpointOptions = endpointRoute || {}
  }

  endpointOptions.headers = lowerCaseHeaderFields(endpointOptions.headers)

  const mergedOptions = deepmerge.all(
    [endpointDefaults, endpointOptions].filter(Boolean),
    { isMergeableObject: isPlainObject }
  )

  return mergedOptions
}

module.exports = merge
