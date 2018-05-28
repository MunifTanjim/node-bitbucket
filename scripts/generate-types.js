const _ = require('lodash')
const path = require('path')
const Mustache = require('mustache')
const { readFileSync, writeFileSync } = require('fs')

const { pascalCase } = require('./helpers')

const ROUTES = require('../src/routes/routes.json')

const typeMap = {
  integer: 'number'
}

const parameterize = (paramName, param) => {
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

  return {
    key: paramName,
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
    let methods = _.toPairs(ROUTES[namespaceName]).reduce(
      (methods, [methodName, method]) => {
        let namespacedParamsName = pascalCase(
          `${namespaceName}-${methodName}Params`
        )

        let ownParams = _.toPairs(method.params).reduce(
          (params, [paramName, param]) =>
            params.concat(parameterize(paramName, param)),
          []
        )

        let hasParams = ownParams.length > 0

        let paramTypeName = hasParams
          ? namespacedParamsName
          : pascalCase('EmptyParams')

        let responseType = method.returns || 'Any'

        return methods.concat({
          method: _.camelCase(methodName),
          paramTypeName,
          ownParams: hasParams && { params: ownParams },
          responseType,
          exclude: !hasParams
        })
      },
      []
    )

    return namespaces.concat({
      namespace: _.camelCase(namespaceName),
      methods
    })
  }, [])

  let typesContent = Mustache.render(template, {
    namespaces,
    typesBlob
  })

  writeFileSync(typesPath, typesContent, 'utf8')
}

module.exports = generateTypes
