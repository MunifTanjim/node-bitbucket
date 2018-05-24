const urlTemplate = require('url-template')
const deepmerge = require('deepmerge')

const endpointDefaults = require('../defaults').ENDPOINT

const { addQueryParameters } = require('./helpers')

const getRequestOptions = options => {
  options = deepmerge(endpointDefaults, options)

  let {
    baseUrl,
    body,
    headers,
    method,
    url,
    request: requestOptions,
    ...remainingOptions
  } = options

  let { _paramGroups, ...params } = remainingOptions
  let groupedParams = {}
  Object.keys(_paramGroups).forEach(groupName => {
    groupedParams[groupName] = {}
    _paramGroups[groupName].forEach(paramName => {
      if (params[paramName])
        groupedParams[groupName][paramName] = params[paramName]
    })
  })

  url = urlTemplate.parse(url).expand(groupedParams.path || {})
  if (!/^http/.test(url)) {
    url = `${baseUrl}${url}`
  }

  if (Object.keys(groupedParams.query || {}).length) {
    url = addQueryParameters(url, groupedParams.query)
  }

  if (Object.keys(groupedParams.body || {}).length) {
    body = groupedParams.body
  }

  return {
    ...requestOptions,
    method,
    url,
    headers,
    body
  }
}

module.exports = getRequestOptions
