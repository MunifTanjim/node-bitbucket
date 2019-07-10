import { HTTPError } from '../../error'

type APIClient = import('./types').APIClient
type Direction = import('./types').Direction
type PaginatedResponseData<T> = import('./types').PaginatedResponseData<T>
type Response<T> = import('./types').Response<T>

export function getPage<T>(
  client: APIClient,
  direction: Direction,
  responseData: PaginatedResponseData<T>
): Promise<Response<T>> {
  const url = responseData[direction]

  if (!url) {
    throw new HTTPError(`not found: ${direction} page`, 404)
  }

  return client.request({ method: 'GET', url })
}
