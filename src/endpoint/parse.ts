import urlTemplate from 'url-template'
import { addQueryParameters } from './utils/add-query-parameters'
import { extractUrlVariableNames } from './utils/extract-url-variable-names'

type EndpointDefaults = import('./types').EndpointDefaults
type EndpointParams = import('./types').EndpointParams
type RequestMethod = import('./types').RequestMethod
type RequestOptions = import('./types').RequestOptions

const contentType = {
  formData: 'multipart/form-data',
  urlEncoded: 'application/x-www-form-urlencoded',
  json: 'application/json; charset=utf-8'
}

export function parse(endpointOptions: EndpointDefaults): RequestOptions {
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
    {} as EndpointParams
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
    method: method.toUpperCase() as RequestMethod,
    url,
    headers,
    body,
    request
  }
}
