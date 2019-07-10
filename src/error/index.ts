import { Headers, RequestOptions } from '../endpoint/types'

export class HTTPError extends Error {
  public constructor(
    message: string,
    statusCode: number,
    options: {
      error?: any
      headers?: Headers
      request?: RequestOptions
    } = {}
  ) {
    super(message)

    // Maintains proper stack trace (only available on V8)
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.error = options.error
    this.headers = options.headers
    this.request = options.request
    this.status = statusCode
  }

  public error?: any
  public headers?: Headers
  public request?: RequestOptions
  public status: number
}
