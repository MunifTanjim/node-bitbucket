const { pascalCase } = require('../utils/pascal-case')

const processResponses = (endpointObject, { responses = [] } = {}) => {
  Object.entries(responses).forEach(([statusCode, responseObject]) => {
    if (Number(statusCode) < 300 && responseObject.schema) {
      endpointObject.returns = pascalCase(
        responseObject.schema.$ref.replace('#/definitions/', '')
      )
    }
  })
}

module.exports.processResponses = processResponses
