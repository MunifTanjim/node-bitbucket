class HTTPError extends Error {
  constructor(message, statusCode, options = {}) {
    super(message)

    // Maintains proper stack trace (only available on V8)
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.error = options.error
    this.headers = options.headers
    this.request = options.request
    this.status = statusCode
  }
}

module.exports = HTTPError
