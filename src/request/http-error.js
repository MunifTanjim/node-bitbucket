const HTTP_ERROR_CODES = {
  304: 'Not Modified',
  400: 'Bad Request',
  404: 'Not Found',
  500: 'Internal Server Error',
  504: 'Gateway Timeout'
}

class HTTPError extends Error {
  constructor(error, code, headers) {
    super(typeof error === 'string' ? error : error.error.message)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.code = code
    this.status = HTTP_ERROR_CODES[code]
    this.headers = headers
    this.error = error
  }

  toJSON() {
    return {
      code: this.code,
      error: this.error,
      status: this.status,
      message: this.message
    }
  }
}

module.exports = HTTPError
