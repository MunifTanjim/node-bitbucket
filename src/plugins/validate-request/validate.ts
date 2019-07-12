import { HTTPError } from '../../error'

type APIClient = import('./types').APIClient
type EndpointParams = import('./types').EndpointParams

export function validate(
  _client: APIClient,
  endpointOptions: EndpointParams
): void {
  const { validate: params } = endpointOptions.request!

  if (!params) return

  for (const paramName of Object.keys(params)) {
    const param = params[paramName]
    const expectedType = param.type

    let value = endpointOptions[paramName]

    const valueIsPresent = typeof value !== 'undefined'

    if (!param.required && !valueIsPresent) {
      continue
    }

    if (param.required && !valueIsPresent) {
      throw new HTTPError(`parameter required: '${paramName}'`, 400)
    }

    if (expectedType === 'integer') {
      const unparsedValue = value
      value = parseInt(value, 10)
      if (isNaN(value)) {
        throw new HTTPError(
          `invalid value for parameter '${paramName}': ${JSON.stringify(
            unparsedValue
          )} is NaN`,
          400
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
          400
        )
      }
    }

    if (param.enum && !param.enum.includes(value)) {
      throw new HTTPError(
        `invalid value for parameter '${paramName}': ${JSON.stringify(value)}`,
        400
      )
    }
  }
}
