const deepmerge = require('deepmerge')
const urlTemplate = require('url-template')

const addQueryParameters = require('../utils/add-query-parameters')

const ENDPOINT_DEFAULTS = require('./defaults')

/**
 * Returns Request Options for HTTP client
 * @param {Object} endpointOptions - Endpoint Options
 * @returns {Object} Request Options for HTTP client
 */
const getRequestOptions = (endpointOptions = {}) => {
  let {
    baseUrl,
    body,
    headers,
    method,
    url,
    options: otherOptions,
    ...remainingOptions
  } = deepmerge(ENDPOINT_DEFAULTS, endpointOptions)

  let { _paramGroups = {}, ...params } = remainingOptions
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
    ...otherOptions,
    method,
    url,
    headers,
    body
  }
}

module.exports = getRequestOptions
