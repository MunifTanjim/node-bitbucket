const { pascalCase } = require('../utils/pascal-case')

const processResponses = (endpointObject, { responses = {} } = {}) => {
  Object.entries(responses).forEach(([statusCode, responseObject]) => {
    if (Number(statusCode) < 300 && responseObject.schema) {
      const isArraySchema = responseObject.schema.type === 'array'

      const ref = isArraySchema
        ? responseObject.schema.items.$ref
        : responseObject.schema.$ref

      const returns = pascalCase(ref.replace('#/definitions/', ''))

      endpointObject.returns = isArraySchema ? `${returns}[]` : returns
    }
  })
}

module.exports.processResponses = processResponses
