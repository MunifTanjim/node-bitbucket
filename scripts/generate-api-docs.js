const { find, get, keys, lowerCase, toPairs, upperCase } = require('lodash')
const { resolve: resolvePath } = require('path')
const { writeFileSync } = require('fs')

const { isPaginatedEndpoint } = require('./utils/is-paginated-endpoint')

const PATHS_SPEC = require('../specification/paths.json')
// const PATHS_SPEC_EXTRAS = require('../specification/extras/paths.json')

const docsPath = resolvePath('docs')

const ROUTES = require('../src/plugins/register-api-endpoints/routes.json')

// One of many workarounds for Bitbucket's faulty API Specification
const URL_ALIASES = {}

const usernameRegex = /\/\{username\}\//

const getAPIDescription = ({ method, url }, apiName, namespaceName) => {
  method = method.toLowerCase()
  url = URL_ALIASES[url] || url

  const spec = get(
    PATHS_SPEC,
    url,
    usernameRegex.test(url)
      ? get(PATHS_SPEC, url.replace(usernameRegex, '/{workspace}/'))
      : null
  )

  return get(spec, [method, 'description'], get(spec, [method, 'summary'], ''))
}

const getAPIParamDefault = (param, paramName, { method, url }) => {
  method = method.toLowerCase()
  url = URL_ALIASES[url] || url

  url = url.replace(/\{\?.+\}$/, '')

  const spec = get(
    PATHS_SPEC,
    url,
    usernameRegex.test(url)
      ? get(PATHS_SPEC, url.replace(usernameRegex, '/{workspace}/'))
      : null
  )

  let defaultVal =
    (find(spec[method].parameters, ['name', paramName]) || {}).default || null

  if (defaultVal === null) {
    defaultVal = (find(spec.parameters, ['name', paramName]) || {}).default
  }

  return defaultVal || null
}

const getAPIParamDescription = (param, paramName, { method, url }) => {
  method = method.toLowerCase()
  url = URL_ALIASES[url] || url

  url = url.replace(/\{\?.+\}$/, '')

  const spec = get(
    PATHS_SPEC,
    url,
    usernameRegex.test(url)
      ? get(PATHS_SPEC, url.replace(usernameRegex, '/{workspace}/'))
      : null
  )

  let description = (find(spec[method].parameters, ['name', paramName]) || {})
    .description

  if (!description) {
    description = (find(spec.parameters, ['name', paramName]) || {}).description
  }

  return description || ''
}

const toAPIParamComment = (param, paramName, api) => {
  const paramDescription = getAPIParamDescription(param, paramName, api)
  const paramDefaultVal = getAPIParamDefault(param, paramName, api)
  const paramType = param.type

  let paramLabel = paramName
  if (paramDefaultVal !== null) {
    paramLabel += `="${paramDefaultVal}"`
  }

  const paramRequired = Boolean(param.required)
  if (!paramRequired) {
    paramLabel = `[${paramLabel}]`
  }

  const paramGroup = `Parameters`

  let allowedValues = ''
  if (param.enum) {
    allowedValues = `=${param.enum.join(',')}`
  }

  return ` * @apiParam (${paramGroup}) {${paramType}${allowedValues}} ${paramLabel
    .replace(/\./g, ':')
    .replace(/\[\]/g, '')}  ${paramDescription.split('\n\n')[0]}`
}

const getLinkToOfficialDocs = ({ method, url }, apiName, namespaceName) => {
  url = URL_ALIASES[url] || url

  url = url.replace(/\{\?.+\}$/, '')

  const specUrl = get(PATHS_SPEC, url)
    ? url
    : usernameRegex.test(url)
    ? get(PATHS_SPEC, url.replace(usernameRegex, '/{workspace}/'))
      ? url.replace(usernameRegex, '/{workspace}/')
      : null
    : null

  if (!specUrl) {
    throw new Error(`specUrl missing for url: ${url}`)
  }

  return `<a href="https://developer.atlassian.com/bitbucket/api/2/reference/resource${encodeURI(
    specUrl
  )}#${lowerCase(method)}">[API Docs]</a>`
}

const toAPIComment = (api, apiName, namespaceName) => {
  if (api.alias) {
    const [namespaceAlias, apiAlias] = api.alias.split('.')
    api = ROUTES[namespaceAlias][apiAlias]
  }

  const method = api.method
  const url = api.url
  let params = api.params

  if (!method) {
    throw new Error(
      `HTTP method missing for ${namespaceName}.${apiName} in routes.json`
    )
  }

  const isPaginated = isPaginatedEndpoint(apiName, api)

  if (isPaginated) {
    params = Object.assign({}, params, {
      page: { require: false, type: 'string' },
      pagelen: { required: false, type: 'integer' },
      q: { required: false, type: 'string' },
      sort: { required: false, type: 'string' },
    })
  }

  if (method === 'GET') {
    params = Object.assign({}, params, {
      fields: { require: false, type: 'string' },
    })
  }

  const descriptionWithLinkToOfficialDocs = [
    getAPIDescription(api, apiName, namespaceName).split('\n\n')[0],
    getLinkToOfficialDocs(api, apiName, namespaceName),
  ]
    .filter(Boolean)
    .join(' ')

  const commentLines = [
    `/**`,
    ` * @api {${upperCase(method)}} ${url} ${apiName}`,
    ` * @apiName ${namespaceName}.${apiName}`,
    ` * @apiDescription ${descriptionWithLinkToOfficialDocs}`,
    ` * @apiGroup ${namespaceName}`,
    ' *',
  ].concat(
    toPairs(params).map(([paramName, param]) =>
      toAPIParamComment(param, paramName, api)
    )
  )

  const paramsString = keys(params).join(', ')

  return commentLines
    .concat([
      ` * @apiExample {js} async/await`,
      ` *   const { data, headers } = await bitbucket.${namespaceName}.${apiName}({ ${paramsString} })`,
      ` * @apiExample {js} Promise`,
      ` *   bitbucket.${namespaceName}.${apiName}({ ${paramsString} }).then(({ data, headers }) => {})`,
      ` */`,
    ])
    .join('\n')
}

const prepareAPI = (api, apiName, namespaceName) =>
  toAPIComment(api, apiName, namespaceName)

const toSectionComment = (namespaceName) => `
/**
 * ${namespaceName}
 * @namespace ${namespaceName}
 */
`

const prepareNamespace = (namespace, namespaceName) =>
  [toSectionComment(namespaceName)]
    .concat(
      keys(namespace).map((apiName) =>
        prepareAPI(namespace[apiName], apiName, namespaceName)
      )
    )
    .join('\n')

const apiDocs = keys(ROUTES)
  .map((namespaceName) =>
    prepareNamespace(ROUTES[namespaceName], namespaceName)
  )
  .join('\n')
  .trim()

writeFileSync(resolvePath(docsPath, 'apidoc.js'), `${apiDocs}\n`)
