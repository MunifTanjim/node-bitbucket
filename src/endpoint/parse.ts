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
  json: 'application/json; charset=utf-8',
}

export function parse(endpointOptions: EndpointDefaults): RequestOptions {
  const {
    accepts = [],
    method: _method,
    baseUrl,
    url: _url,
    headers,
    request,
    ...params
  } = endpointOptions

  const method = _method.toUpperCase() as RequestMethod

  const urlVariableNames = extractUrlVariableNames(_url)

  let url = urlTemplate.parse(_url).expand(params)
  if (!/^http/.test(url)) {
    url = `${baseUrl}${url}`
  }

  const { _body, ...remainingParams } = Object.keys(params).reduce(
    (bodyParams: EndpointParams, key): EndpointParams => {
      if (!urlVariableNames.includes(key)) bodyParams[key] = params[key]
      return bodyParams
    },
    {}
  )

  let body: any
  let bodyIsFormData = false

  if (['GET', 'DELETE'].includes(method)) {
    url = addQueryParameters(url, remainingParams)
  } else if (typeof _body !== 'undefined') {
    body = _body

    bodyIsFormData = /form-?data/i.test(body.constructor.name)

    if (bodyIsFormData && accepts.includes(contentType.formData)) {
      for (const paramName of Object.keys(remainingParams)) {
        body.append(paramName, remainingParams[paramName])
      }
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

  if (typeof body === 'undefined') {
    delete headers['content-type']
  }

  return {
    method,
    url,
    body,
    headers,
    request,
  }
}
