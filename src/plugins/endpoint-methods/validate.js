const HTTPError = require('../../request/http-error')

const validate = (paramsSpecs = {}, params) => {
  Object.keys(paramsSpecs).forEach(paramName => {
    let spec = paramsSpecs[paramName]
    let expectedType = spec.type

    let param = params[paramName]

    let valueIsPresent = typeof param !== 'undefined'

    if (!spec.required && !valueIsPresent) {
      return
    }

    if (spec.required && !valueIsPresent) {
      throw new HTTPError(`Parameter required: '${paramName}'`, 400)
    }

    if (expectedType === 'integer') {
      let unparsedParam = param
      param = parseInt(param, 10)
      if (Number.isNaN(param)) {
        throw new HTTPError(
          `Invalid Type of Parameter '${paramName}': ${JSON.stringify(
            unparsedParam
          )}, Expected Type: ${expectedType}`,
          400
        )
      }
    }

    if (expectedType === 'boolean') {
      let valueIsBoolean =
        typeof param === 'string'
          ? ['false', 'true'].includes(param)
          : typeof param === 'boolean'
      if (!valueIsBoolean) {
        throw new HTTPError(
          `Invalid Type of Parameter '${paramName}': ${JSON.stringify(
            param
          )}, Expected Type: ${expectedType}`,
          400
        )
      }
    }

    if (spec.enum && !spec.enum.includes(param)) {
      throw new HTTPError(
        `Invalid Value for Parameter '${paramName}': ${JSON.stringify(
          param
        )}, Expected one of [${spec.enum.join(',')}]`,
        400
      )
    }
  })

  return params
}

module.exports = validate
