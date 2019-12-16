const deepmerge = require('deepmerge')
const { uniq } = require('lodash')
const { pascalCase } = require('../utils/pascal-case')

const usernameRegex = /\/\{username\}/
const workspaceRegex = /\/\{workspace\}/

const fixUrlParameters = (endpointObject, url) => {
  const needWorkspaceUrlParam = workspaceRegex.test(url)
  const needUsernameUrlParam = usernameRegex.test(url)

  if (needWorkspaceUrlParam && !endpointObject.params['workspace']) {
    endpointObject.params['workspace'] = {
      in: 'path',
      required: true,
      type: 'string'
    }
  }

  if (!needWorkspaceUrlParam) {
    delete endpointObject.params['workspace']
  }

  if (needUsernameUrlParam && !endpointObject.params['username']) {
    endpointObject.params['username'] = {
      in: 'path',
      required: true,
      type: 'string'
    }
  }

  if (!needUsernameUrlParam) {
    delete endpointObject.params['username']
  }
}

const processParameters = (endpointObject, { parameters = [] } = {}, url) => {
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

  fixUrlParameters(endpointObject, url)
}

module.exports.processParameters = processParameters
