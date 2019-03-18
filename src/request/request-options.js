const urlTemplate = require('url-template')

const addQueryParameters = require('../utils/add-query-parameters.js')
const deepmerge = require('../utils/deepmerge.js')

const HTTPError = require('./http-error.js')

const DEFAULT_OPTIONS = require('./defaults.js')

/**
 * Returns Request Options for HTTP client
 * @param {Object} endpointOptions - Endpoint Options
 * @returns {Object} Request Options for HTTP client
 */
const getRequestOptions = (endpointOptions = {}) => {
  let {
    accepts = [],
    baseUrl,
    body,
    headers,
    method,
    produces = [],
    url,
    options: otherOptions,
    ...remainingOptions
  } = deepmerge(DEFAULT_OPTIONS, endpointOptions)

  let { _paramGroups = {}, ...params } = remainingOptions

  let paramGroups = {}

  Object.keys(_paramGroups).forEach(groupName => {
    paramGroups[groupName] = {}
    _paramGroups[groupName].forEach(paramName => {
      if (params[paramName])
        paramGroups[groupName][paramName] = params[paramName]
    })
  })

  url = urlTemplate.parse(url).expand(paramGroups.path || {})
  if (!/^http/.test(url)) {
    url = `${baseUrl}${url}`
  }

  if (paramGroups.query) {
    url = addQueryParameters(url, paramGroups.query)
  }

  if (produces.length === 1) {
    headers['accept'] = produces[0]
  }

  if (paramGroups.body && Object.keys(paramGroups.body).length) {
    body = paramGroups.body._body || {}

    let bodyType = body.constructor.name

    if (/form-?data/i.test(bodyType)) {
      let formDataContentType = 'multipart/form-data'

      if (~accepts.indexOf(formDataContentType)) {
        headers = deepmerge(
          headers,
          typeof body.getHeaders === 'function'
            ? body.getHeaders()
            : { 'content-type': formDataContentType }
        )

        Object.keys(paramGroups.body).forEach(paramName => {
          if (paramName === '_body') return
          let param = paramGroups.body[paramName]
          param = typeof param === 'string' ? param : JSON.stringify(param)
          body.append(paramName, param)
        })
      } else {
        // multipart/form-data not supported
        throw new HTTPError(`Invalid Body Type: ${bodyType}`, 400)
      }
    } else {
      let urlEncodedContentType = 'application/x-www-form-urlencoded'

      Object.keys(paramGroups.body).forEach(paramName => {
        if (paramName === '_body') return
        body[paramName] = paramGroups.body[paramName]
      })

      if (~accepts.indexOf(urlEncodedContentType)) {
        headers['content-type'] = urlEncodedContentType

        Object.keys(body).forEach(key => {
          body[key] =
            typeof body[key] === 'string'
              ? body[key]
              : JSON.stringify(body[key])
        })

        body = addQueryParameters('', body).substring(1)
      } else {
        // application/x-www-form-urlencoded not supported
        headers['content-type'] = 'application/json; charset=utf-8'
        body = JSON.stringify(body)
      }
    }
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
