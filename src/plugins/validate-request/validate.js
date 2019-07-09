'use strict'

const HTTPError = require('../../error')

function validate(_client, requestOptions) {
  const { validate: params } = requestOptions.request

  if (!params) return

  Object.keys(params).forEach(paramName => {
    const param = params[paramName]
    const expectedType = param.type

    let value = requestOptions[paramName]

    const valueIsPresent = typeof value !== 'undefined'

    if (!param.required && !valueIsPresent) {
      return
    }

    if (param.required && !valueIsPresent) {
      throw new HTTPError(`parameter required: '${paramName}'`, 400, {
        request: requestOptions
      })
    }

    if (expectedType === 'integer') {
      const unparsedValue = value
      value = parseInt(value, 10)
      if (isNaN(value)) {
        throw new HTTPError(
          `invalid value for parameter '${paramName}': ${JSON.stringify(
            unparsedValue
          )} is NaN`,
          400,
          { request: requestOptions }
        )
      }
    }

    if (expectedType === 'boolean') {
      const valueIsBoolean = typeof value === 'boolean'
      if (!valueIsBoolean) {
        throw new HTTPError(
          `invalid value for parameter '${paramName}': ${JSON.stringify(
            value
          )}`,
          400,
          { request: requestOptions }
        )
      }
    }

    if (param.enum && !param.enum.includes(value)) {
      throw new HTTPError(
        `invalid value for parameter '${paramName}': ${JSON.stringify(value)}`,
        400,
        { request: requestOptions }
      )
    }
  })

  return requestOptions
}

module.exports = validate
