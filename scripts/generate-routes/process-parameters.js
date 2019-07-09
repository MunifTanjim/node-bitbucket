const deepmerge = require('deepmerge')
const { uniq } = require('lodash')
const { pascalCase } = require('../utils/pascal-case')

const processParameters = (endpointObject, { parameters = [] } = {}) => {
  for (const {
    enum: _enum,
    in: _in,
    name,
    required,
    schema = {},
    type = 'any',
    deleted
  } of parameters) {
    if (deleted) {
      delete endpointObject.params[name]
      continue
    }

    if (!endpointObject.params[name]) {
      endpointObject.params[name] = {}
    }

    endpointObject.params[name] = deepmerge(endpointObject.params[name], {
      enum: _enum,
      in: _in,
      required,
      type
    })

    endpointObject.params[name].enum = uniq(endpointObject.params[name].enum)

    if (!required) {
      delete endpointObject.params[name].required
    }

    if (schema.$ref) {
      endpointObject.params[name].schema = pascalCase(
        schema.$ref.replace('#/definitions/', '')
      )
    }
  }
}

module.exports.processParameters = processParameters
