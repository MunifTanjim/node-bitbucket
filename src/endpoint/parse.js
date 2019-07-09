const isPlainObject = require('is-plain-object')
const urlTemplate = require('url-template')

const { addQueryParameters } = require('./utils/add-query-parameters')
const {
  extractUrlVariableNames
} = require('./utils/extract-url-variable-names')

const contentType = {
  formData: 'multipart/form-data',
  urlEncoded: 'application/x-www-form-urlencoded',
  json: 'application/json; charset=utf-8'
}

const parse = (endpointOptions = {}) => {
  let {
    accepts = [],
    method,
    baseUrl,
    url,
    headers,
    body,
    request,
    ...params
  } = endpointOptions

  const urlVariableNames = extractUrlVariableNames(url)

  url = urlTemplate.parse(url).expand(params)
  if (!/^http/.test(url)) {
    url = `${baseUrl}${url}`
  }

  const { _body, ...remainingParams } = Object.keys(params).reduce(
    (bodyParams, key) => {
      if (!urlVariableNames.includes(key)) bodyParams[key] = params[key]
      return bodyParams
    },
    {}
  )

  let bodyIsFormData = false

  if (['GET', 'DELETE'].includes(method)) {
    url = addQueryParameters(url, remainingParams)
  } else if (typeof _body !== 'undefined') {
    body = _body

    bodyIsFormData = /form-?data/i.test(body.constructor.name)

    if (bodyIsFormData && accepts.includes(contentType.formData)) {
      Object.keys(remainingParams).forEach(paramName => {
        body.append(paramName, remainingParams[paramName])
      })
    }
  } else if (Object.keys(remainingParams).length) {
    body = remainingParams
  }

  if (!bodyIsFormData) {
    if (accepts.includes(contentType.urlEncoded)) {
      body = addQueryParameters('', body).substring(1)
      headers['content-type'] = contentType.urlEncoded
    } else {
      body = JSON.stringify(body)
      headers['content-type'] = contentType.json
    }
  }

  return {
    method: method.toUpperCase(),
    url,
    headers,
    body,
    request
  }
}

module.exports = parse
