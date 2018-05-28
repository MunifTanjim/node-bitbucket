const fetch = require('node-fetch')
const debug = require('debug')('bitbucket')
const deepmerge = require('deepmerge')

const getBuffer = require('../utils/get-buffer-response')
const HTTPError = require('./http-error')

const getData = response => {
  let contentType = response.headers.get('content-type')

  if (/application\/json/.test(contentType)) {
    return response.json()
  }

  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text()
  }

  return getBuffer(response)
}

/**
 * Performs HTTP Request
 * @param {Object} requestOptions
 * @returns {Promise} ({data,headers}) on success
 * @throws {HTTPError} on failure
 */
const request = requestOptions => {
  debug('REQUEST:', requestOptions)

  let { method, url, headers = {}, body, timeout } = requestOptions

  // https://fetch.spec.whatwg.org/#methods
  method = method.toUpperCase()

  if (body) {
    headers = deepmerge(
      { 'content-type': 'application/json; charset=utf-8' },
      headers
    )
  }

  let options = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
    timeout
  }

  let responseHeaders = {}

  return fetch(url, options)
    .then(response => {
      for (let [field, value] of response.headers.entries()) {
        responseHeaders[field] = value
      }

      if (response.status >= 400 || [304].includes(response.status)) {
        return getData(response).then(error => {
          throw new HTTPError(error, response.status, responseHeaders)
        })
      }

      return getData(response)
    })
    .then(data => ({
      data,
      headers: responseHeaders
    }))
    .catch(error => {
      if (error instanceof HTTPError) {
        throw error
      }
      throw new HTTPError(error.message, 500, responseHeaders)
    })
}

module.exports = request
