type Headers = import('./types').Headers
type RequestOptions = import('./types').RequestOptions

export class HTTPError extends Error {
  public error?: any
  public headers?: Headers
  public request?: RequestOptions
  public status: number

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

    this.name = 'HTTPError'
    this.error = options.error
    this.headers = options.headers
    this.request = options.request
    this.status = statusCode
  }
}
