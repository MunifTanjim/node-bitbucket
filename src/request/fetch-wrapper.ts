import nodeFetch from 'node-fetch'
import { HTTPError } from '../error'

type FetchResponse = import('node-fetch').Response
type Endpoint = import('./types').Endpoint
type Headers = import('./types').Headers
type Response<T> = import('./types').Response<T>

function getData(response: FetchResponse): Promise<any> {
  const contentType = response.headers.get('content-type')

  if (contentType!.includes('application/json')) {
    return response.json()
  }

  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text()
  }

  return response.arrayBuffer()
}

export function fetchWrapper(
  requestOptions: ReturnType<Endpoint>
): Promise<Response<any>> {
  const { method, url, headers, body, request } = requestOptions

  const options = Object.assign({ method, body, headers }, request)

  let responseStatus: number
  let responseUrl: string

  const responseHeaders: Headers = {}

  const fetch = request!.fetch ?? nodeFetch

  return fetch(url, options)
    .then((response: FetchResponse): any => {
      responseStatus = response.status
      responseUrl = response.url

      for (const [field, value] of response.headers) {
        responseHeaders[field] = value
      }

      if (response.status >= 400 || [304].includes(response.status)) {
        return getData(response).then((error): void => {
          throw new HTTPError(response.statusText, responseStatus, {
            error,
            headers: responseHeaders,
            request: requestOptions,
          })
        })
      }

      return getData(response)
    })
    .then(
      (data): Response<any> => ({
        data,
        headers: responseHeaders,
        status: responseStatus,
        url: responseUrl,
      })
    )
    .catch((error): any => {
      if (error instanceof HTTPError) {
        throw error
      }

      throw new HTTPError(error.message, 500, {
        headers: responseHeaders,
        request: requestOptions,
      })
    })
}
