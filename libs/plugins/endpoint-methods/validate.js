const HTTPError = require('../../request/http-error')

const validate = (endpointParams, options) => {
  Object.keys(endpointParams).forEach(paramName => {
    let param = endpointParams[paramName]
    let expectedType = param.type

    let value = options[paramName]

    let valueIsPresent = 'undefined' !== typeof value

    if (!param.required && !valueIsPresent) {
      return
    }

    if (param.required && !valueIsPresent) {
      throw new HTTPError(`Parameter required: '${paramName}'`, 400)
    }

    if ('integer' === expectedType) {
      let unparsedValue = value
      value = parseInt(value, 10)
      if (Number.isNaN(value)) {
        throw new HTTPError(
          `Invalid Type of Parameter '${paramName}': ${JSON.stringify(
            unparsedValue
          )}, Expected Type: ${expectedType}`,
          400
        )
      }
    }

    if ('boolean' === expectedType) {
      let valueIsBoolean =
        'string' === typeof value
          ? ['false', 'true'].includes(value)
          : 'boolean' === typeof value
      if (!valueIsBoolean) {
        throw new HTTPError(
          `Invalid Type of Parameter '${paramName}': ${JSON.stringify(
            value
          )}, Expected Type: ${expectedType}`,
          400
        )
      }
    }

    if (param.enum && !param.enum.includes(value)) {
      throw new HTTPError(
        `Invalid Value for Parameter '${paramName}': ${JSON.stringify(
          value
        )}, Expected one of [${param.enum.join(',')}]`,
        400
      )
    }
  })

  return options
}

module.exports = validate
