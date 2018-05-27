const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const Mustache = require('mustache')
const upperFirst = require('lodash/upperFirst')
const camelcase = require('lodash/camelCase')

const ROUTES = require('../src/routes/routes.json')

const templatePath = path.resolve('scripts/templates')
const definitionPath = path.resolve('src')

const typeMap = {
  integer: 'number'
}

const parameterize = (paramName, param) => {
  if (param === null) {
    return {}
  }

  let type = typeMap[param.type] || param.type

  let enums = param.enum ? param.enum.map(JSON.stringify).join('|') : null

  return {
    name: pascalcase(paramName),
    key: paramName,
    required: param.required,
    type: enums || type
  }
}

const pascalcase = string => upperFirst(camelcase(string))

const entries = object => Object.keys(object).map(key => [key, object[key]])

const generateTypes = (languageName, templateFile, outputFile) => {
  let template = readFileSync(path.resolve(templatePath, templateFile), 'utf8')

  let namespaces = Object.keys(ROUTES).reduce((namespaces, namespaceName) => {
    let methods = entries(ROUTES[namespaceName]).reduce(
      (methods, [methodName, method]) => {
        let namespacedParamsName = pascalcase(
          `${namespaceName}-${methodName}Params`
        )

        let ownParams = entries(method.params).reduce(
          (params, [paramName, param]) =>
            params.concat(parameterize(paramName, param)),
          []
        )

        let hasParams = ownParams.length > 0

        let paramTypeName = hasParams
          ? namespacedParamsName
          : pascalcase('EmptyParams')

        return methods.concat({
          method: camelcase(methodName),
          paramTypeName,
          ownParams: hasParams && { params: ownParams },
          exclude: !hasParams
        })
      },
      []
    )

    return namespaces.concat({
      namespace: camelcase(namespaceName),
      methods
    })
  }, [])

  let typesContent = Mustache.render(template, { namespaces })

  writeFileSync(path.resolve(definitionPath, outputFile), typesContent, 'utf8')
}

module.exports = generateTypes
