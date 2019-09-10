/* eslint-disable no-console */

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

const { isPaginatedEndpoint } = require('./utils/is-paginated-endpoint')
const { pascalCase } = require('./utils/pascal-case')

const ROUTES = require('../src/plugins/register-api-endpoints/routes.json')
const typesSchema = require('../templates/types-schema.json')

async function getTypesBlob(languageName) {
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
  default: 'Schema.Any',
  'application/x-www-form-urlencoded': 'Schema.AnyObject',
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

async function generateTypes(languageName, templateFile) {
  const template = readFileSync(templateFile, 'utf8')

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

        const isPaginated = isPaginatedEndpoint(endpointName, endpointObject)

        if (isPaginated) {
          endpointObject.params = Object.assign({}, endpointObject.params, {
            page: { require: false, type: 'string' },
            pagelen: { required: false, type: 'integer' },
            q: { required: false, type: 'string' },
            sort: { required: false, type: 'string' }
          })
        }

        if (endpointObject.method === 'GET') {
          endpointObject.params = Object.assign({}, endpointObject.params, {
            fields: { require: false, type: 'string' }
          })
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
    parser: languageName.toLowerCase(),
    semi: false,
    singleQuote: true
  })

  return prettyTypes
}

function writeTypes(languageName, outputFile, types) {
  writeFileSync(outputFile, types, 'utf8')

  console.log(
    `${languageName} types written to: ${relativePath(
      resolvePath('.'),
      outputFile
    )}`
  )
}

const templatesPath = resolvePath('templates')
const typesPath = resolvePath('lib')

const typeFiles = [
  {
    languageName: 'TypeScript',
    templateFile: joinPath(templatesPath, 'bitbucket.d.ts.mustache'),
    outputFile: joinPath(typesPath, 'bitbucket.d.ts')
  },
  {
    languageName: 'TypeScript',
    templateFile: joinPath(templatesPath, 'index.d.ts.mustache'),
    outputFile: joinPath(typesPath, 'index.d.ts')
  },
  {
    languageName: 'TypeScript',
    templateFile: joinPath(templatesPath, 'minimal.d.ts.mustache'),
    outputFile: joinPath(typesPath, 'minimal.d.ts')
  },
  {
    languageName: 'TypeScript',
    templateFile: joinPath(templatesPath, 'plugins/authenticate.d.ts.mustache'),
    outputFile: joinPath(typesPath, 'plugins/authenticate.d.ts')
  }
]

typeFiles.forEach(({ languageName, templateFile, outputFile }) => {
  generateTypes(languageName, templateFile, outputFile).then(
    writeTypes.bind(null, languageName, outputFile)
  )
})
