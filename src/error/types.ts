import type {
  Headers,
  RequestOptions
} from '../endpoint/types'

export type {
  Headers,
  RequestOptions
}

export abstract class HTTPError extends Error {
  public error!: any | undefined
  public headers!: Headers | undefined
  public request!: RequestOptions | undefined
  public status!: number
}
