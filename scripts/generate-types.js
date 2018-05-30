const _ = require('lodash')
const path = require('path')
const Mustache = require('mustache')
const { readFileSync, writeFileSync } = require('fs')

const { pascalCase } = require('./helpers')

const ROUTES = require('../src/routes/routes.json')

const typeMap = {
  integer: 'number'
}

const bodyTypeMap = {
  default: 'BitBucket.Any',
  'application/x-www-form-urlencoded': 'BitBucket.AnyObject',
  'multipart/form-data': 'FormData'
}

const parameterize = (paramName, param, accepts) => {
  if (param === null) {
    return {}
  }

  let type = typeMap[param.type] || param.type

  let enums = param.enum ? param.enum.map(JSON.stringify).join('|') : null

  let schema = false
  if (type === 'any' && param.schema) {
    schema = true
    type = param.schema
  }

  if (accepts && paramName === '_body') {
    type = accepts
      .map(type => bodyTypeMap[type] || bodyTypeMap.default)
      .join(' | ')
  }

  return {
    name: paramName,
    required: param.required,
    schema,
    type: enums || type
  }
}

const generateTypes = (languageName, templateFile, outputFile, typesBlob) => {
  let typesPath = path.resolve('src', outputFile)
  let templatePath = path.resolve('scripts/templates', templateFile)

  let template = readFileSync(templatePath, 'utf8')

  let namespaces = Object.keys(ROUTES).reduce((namespaces, namespaceName) => {
    let apis = _.toPairs(ROUTES[namespaceName]).reduce(
      (apis, [apiName, api]) => {
        let namespacedParamsName = pascalCase(`${namespaceName}-${apiName}`)

        if (api.alias) {
          let [namespaceAlias, apiAlias] = api.alias.split('.')
          api = ROUTES[namespaceAlias][apiAlias]
        }

        let ownParams = _.toPairs(api.params).reduce(
          (params, [paramName, param]) =>
            params.concat(parameterize(paramName, param, api.accepts)),
          []
        )

        let hasParams = ownParams.length > 0

        let paramsType = hasParams ? namespacedParamsName : pascalCase('Empty')

        let responseType = api.returns || 'Any'

        return apis.concat({
          name: _.camelCase(apiName),
          paramsType,
          ownParams: hasParams && { params: ownParams },
          responseType,
          exclude: !hasParams
        })
      },
      []
    )

    return namespaces.concat({
      namespace: _.camelCase(namespaceName),
      apis
    })
  }, [])

  let typesContent = Mustache.render(template, {
    namespaces,
    typesBlob
  })

  writeFileSync(typesPath, typesContent, 'utf8')
}

module.exports = generateTypes
