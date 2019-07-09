const nodeFetch = require('node-fetch')

const HTTPError = require('../error')

const getData = response => {
  const contentType = response.headers.get('content-type')

  if (/application\/json/.test(contentType)) {
    return response.json()
  }

  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text()
  }

  return response.arrayBuffer()
}

function fetchWrapper(requestOptions) {
  const { method, url, headers, body, request } = requestOptions

  const options = Object.assign({ method, body, headers }, request)

  let responseHeaders = {}
  let responseStatus
  let responseUrl

  const fetch = request.fetch || nodeFetch

  return fetch(url, options)
    .then(response => {
      responseUrl = response.url
      responseStatus = response.status
      for (const [field, value] of response.headers) {
        responseHeaders[field] = value
      }

      if (response.status >= 400 || [304].includes(response.status)) {
        return getData(response).then(error => {
          throw new HTTPError(response.statusText, responseStatus, {
            error,
            headers: responseHeaders,
            request: requestOptions
          })
        })
      }

      return getData(response)
    })
    .then(data => ({
      data,
      headers: responseHeaders,
      status: responseStatus,
      url: responseUrl
    }))
    .catch(error => {
      if (error instanceof HTTPError) {
        throw error
      }

      throw new HTTPError(error.message, 500, {
        headers: responseHeaders,
        request: requestOptions
      })
    })
}

module.exports = fetchWrapper
