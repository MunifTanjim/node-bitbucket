const path = require('path')
const fetch = require('node-fetch')
const { writeFileSync } = require('fs')
const deepsort = require('deep-sort-object')

const specPath = path.resolve('specification')
const srcPath = path.resolve('src')

const writeSpecPartialJSON = (filename, content) => {
  writeFileSync(
    path.resolve(specPath, `${filename}.json`),
    `${JSON.stringify(deepsort(content), null, 2)}\n`
  )
}

const API_SPECIFICATION = 'https://api.bitbucket.org/swagger.json'

fetch(API_SPECIFICATION)
  .then(response => response.json())
  .then(({ definitions, ...apiSpec }) => {
    writeSpecPartialJSON('definitions', definitions)
    return apiSpec
  })
  .then(({ paths, ...apiSpec }) => {
    writeSpecPartialJSON('paths', paths)
    return apiSpec
  })
  .then(({ securityDefinitions, ...apiSpec }) => {
    writeSpecPartialJSON('securityDefinitions', securityDefinitions)

    writeFileSync(
      path.resolve(srcPath, `plugins/_oauth/spec.json`),
      `${JSON.stringify(deepsort(securityDefinitions.oauth2), null, 2)}\n`
    )
    return apiSpec
  })
  .then(({ tags, ...apiSpec }) => {
    writeSpecPartialJSON('tags', tags)
    return apiSpec
  })
  .then(({ 'x-radar-pages': xRadarPages, ...apiSpec }) => {
    writeSpecPartialJSON('others', apiSpec)

    delete apiSpec.info
    delete apiSpec['x-atlassian-narrative']
    delete apiSpec['x-revision']
    writeFileSync(
      path.resolve(srcPath, `endpoint/spec.json`),
      `${JSON.stringify(deepsort(apiSpec), null, 2)}\n`
    )
  })
  .catch(err => {
    console.error(err)
  })
