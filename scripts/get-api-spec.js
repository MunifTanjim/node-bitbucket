const { writeFileSync } = require('fs')
const fetch = require('node-fetch')
const path = require('path')

const API_SPECIFICATION = 'https://api.bitbucket.org/swagger.json'

const apiSpecPath = path.resolve('api-spec')

const writeSpecPartialJSON = (filename, content) => {
  writeFileSync(
    path.resolve(apiSpecPath, `${filename}.json`),
    `${JSON.stringify(content, null, 2)}\n`
  )
}

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
    return apiSpec
  })
  .then(({ tags, ...apiSpec }) => {
    writeSpecPartialJSON('tags', tags)
    return apiSpec
  })
  .then(({ 'x-radar-pages': xRadarPages, ...apiSpec }) => {
    writeSpecPartialJSON('others', apiSpec)
  })
  .catch(err => {
    console.error(err)
  })
