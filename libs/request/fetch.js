const fetch = require('node-fetch')
const debug = require('debug')('bitbucket')
const deepmerge = require('deepmerge')

const getBuffer = require('./get-buffer-response')
const HTTPError = require('./http-error')

const request = requestOptions => {
  debug('REQUEST:', requestOptions)

  let { method, url, headers, body, timeout } = requestOptions

  // https://fetch.spec.whatwg.org/#methods
  method = method.toUpperCase()

  // calculate content length unless body is a stream, in which case the
  // content length is already set per option
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
      for (let [key, value] of response.headers.entries()) {
        responseHeaders[key] = value
      }

      if (response.status >= 400 || [304].includes(response.status)) {
        return response.json().then(error => {
          throw new HTTPError(error, response.status, responseHeaders)
        })
      }

      const contentType = response.headers.get('content-type')
      if (/application\/json/.test(contentType)) {
        return response.json()
      }

      if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
        return response.text()
      }

      return getBuffer(response)
    })
    .then(data => ({
      data,
      meta: responseHeaders
    }))
    .catch(error => {
      if (error instanceof HTTPError) {
        throw error
      }
      throw new HTTPError(error.message, 500, responseHeaders)
    })
}

module.exports = request
