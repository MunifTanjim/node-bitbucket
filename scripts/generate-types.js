const { readFileSync, writeFileSync } = require('fs')
const camelCase = require('lodash/camelCase')
const toPairs = require('lodash/toPairs')
const { render: renderTemplate } = require('mustache')
const {
  join: joinPath,
  relative: relativePath,
  resolve: resolvePath
} = require('path')
const prettier = require('prettier')

const { pascalCase } = require('./utils/pascal-case')

const ROUTES = require('../src/plugins/register-api-endpoints/routes.json')
const typesSchema = require('./templates/types-schema.json')

async function getTypesBlob(languageName) {
  console.log(`compiling types schema for ${languageName}...`)

  const compileSchema = {
    typescript: require('json-schema-to-typescript').compile
  }[languageName.toLowerCase()]

  const typesBlob = await compileSchema(typesSchema, 'RootInterfaceToDiscard', {
    bannerComment: false
  })

  const typesBlobWithoutRootInterface = typesBlob.replace(
    /interface RootInterfaceToDiscard(?:\s|.)+?export /,
    ''
  )

  const typesBlobWithIndentation = typesBlobWithoutRootInterface
    .split('\n')
    .filter(Boolean)
    .join('\n    ')

  return typesBlobWithIndentation
}

const typeMap = {
  integer: 'number'
}

const bodyTypeMap = {
  default: 'Bitbucket.Any',
  'application/x-www-form-urlencoded': 'Bitbucket.Object',
  'multipart/form-data': 'FormData'
}

function parameterize(paramName, param, accepts) {
  if (!param) return {}

  let type = typeMap[param.type] || param.type

  const enums = param.enum ? param.enum.map(JSON.stringify).join(' | ') : null

  let schema = false
  if (param.schema) {
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

const templatesPath = resolvePath('scripts/templates')
const typesPath = resolvePath('src')

async function generateTypes(languageName, templateFile) {
  const templatePath = joinPath(templatesPath, templateFile)
  const template = readFileSync(templatePath, 'utf8')

  console.log(`generating ${languageName} types...`)

  const typesBlob = await getTypesBlob(languageName)

  const namespaces = Object.keys(ROUTES).reduce((namespaces, namespaceName) => {
    const endpoints = toPairs(ROUTES[namespaceName]).reduce(
      (endpoints, [endpointName, endpointObject]) => {
        const namespacedParamsName = pascalCase(
          `${namespaceName}-${endpointName}`
        )

        if (endpointObject.alias) {
          const [namespaceAlias, endpointAlias] = endpointObject.alias.split(
            '.'
          )
          endpointObject = ROUTES[namespaceAlias][endpointAlias]
        }

        const params = toPairs(endpointObject.params).reduce(
          (params, [paramName, param]) =>
            params.concat(
              parameterize(paramName, param, endpointObject.accepts)
            ),
          []
        )

        const hasParams = params.length > 0
        const paramsType = hasParams
          ? namespacedParamsName
          : pascalCase('Empty')
        const responseType = endpointObject.returns || 'Any'

        return endpoints.concat({
          name: camelCase(endpointName),
          params,
          paramsType,
          responseType,
          exclude: !hasParams
        })
      },
      []
    )

    return namespaces.concat({
      namespace: namespaceName,
      endpoints
    })
  }, [])

  const types = renderTemplate(template, {
    namespaces,
    typesBlob
  })

  const prettyTypes = prettier.format(types, {
    parser: languageName.toLowerCase()
  })

  return prettyTypes
}

function writeTypes(types, outputFile) {
  const definitionFilePath = joinPath(typesPath, outputFile)

  writeFileSync(definitionFilePath, types, 'utf8')

  console.log(
    `${languageName} types written to: ${relativePath(
      resolvePath('.'),
      definitionFilePath
    )}`
  )
}

const languageName = 'TypeScript'
const templateFile = 'index.d.ts.mustache'
const outputFile = 'index.d.ts'

generateTypes(languageName, templateFile, outputFile).then(types =>
  writeTypes(types, outputFile)
)
