import nodeFetch from 'node-fetch'
import { HTTPError } from '../error'

type AnyResponse = import('./types').Response<any>
type Endpoint = import('./types').Endpoint
type Headers = import('./types').Headers
type Response = import('node-fetch').Response

const getData = (response: Response): Promise<any> => {
  const contentType = response.headers.get('content-type')

  if (/application\/json/.test(contentType!)) {
    return response.json()
  }

  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text()
  }

  return response.arrayBuffer()
}

export function fetchWrapper(
  requestOptions: ReturnType<Endpoint>
): Promise<AnyResponse> {
  const { method, url, headers, body, request } = requestOptions

  const options = Object.assign({ method, body, headers }, request)

  let responseHeaders: Headers = {}
  let responseStatus: number
  let responseUrl: string

  const fetch = request!.fetch || nodeFetch

  return fetch(url, options)
    .then((response: Response) => {
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
    .then((data: any) => ({
      data,
      headers: responseHeaders,
      status: responseStatus,
      url: responseUrl
    }))
    .catch((error: Error) => {
      if (error instanceof HTTPError) {
        throw error
      }

      throw new HTTPError(error.message, 500, {
        headers: responseHeaders,
        request: requestOptions
      })
    })
}
