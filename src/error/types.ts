import { Headers, RequestOptions } from '../endpoint/types'

export { Headers, RequestOptions } from '../endpoint/types'

export abstract class HTTPError extends Error {
  public error!: any | undefined
  public headers!: Headers | undefined
  public request!: RequestOptions | undefined
  public status!: number
}
