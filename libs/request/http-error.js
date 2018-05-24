const HTTP_STATUS_CODES = {
  304: 'Not Modified',
  400: 'Bad Request',
  404: 'Not Found',
  500: 'Internal Server Error',
  504: 'Gateway Timeout'
}

class HTTPError extends Error {
  constructor(message, code, headers) {
    super(message)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }

    this.name = 'HTTPError'
    this.code = code
    this.status = HTTP_STATUS_CODES[code]
    this.headers = headers
  }

  toJSON() {
    return {
      code: this.code,
      status: this.status,
      message: this.message
    }
  }
}

module.exports = HTTPError
