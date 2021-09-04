const path = require('path')
const fetch = require('node-fetch')
const deepsort = require('deep-sort-object')

const { writeToFile } = require('./utils/write-to-file')

const specPath = path.resolve('specification')
const srcPath = path.resolve('src')

const writeSpecPartialJSON = async (filename, content) => {
  await writeToFile(
    path.resolve(specPath, `${filename}.json`),
    JSON.stringify(deepsort(content), null, 2)
  )
}

const API_SPECIFICATION = 'https://api.bitbucket.org/swagger.json'

fetch(API_SPECIFICATION)
  .then((response) => response.json())
  .then(async ({ definitions, ...apiSpec }) => {
    await writeSpecPartialJSON('definitions', definitions)
    return apiSpec
  })
  .then(async ({ paths, ...apiSpec }) => {
    await writeSpecPartialJSON('paths', paths)
    return apiSpec
  })
  .then(async ({ securityDefinitions, ...apiSpec }) => {
    await writeSpecPartialJSON('securityDefinitions', securityDefinitions)

    await writeToFile(
      path.resolve(srcPath, `plugins/_oauth/spec.json`),
      JSON.stringify(deepsort(securityDefinitions.oauth2), null, 2)
    )
    return apiSpec
  })
  .then(async ({ tags, ...apiSpec }) => {
    await writeSpecPartialJSON('tags', tags)
    return apiSpec
  })
  .then(async ({ 'x-radar-pages': xRadarPages, ...apiSpec }) => {
    writeSpecPartialJSON('others', apiSpec)

    delete apiSpec.info
    delete apiSpec['x-atlassian-narrative']
    delete apiSpec['x-revision']
    await writeToFile(
      path.resolve(srcPath, `endpoint/spec.json`),
      JSON.stringify(deepsort(apiSpec), null, 2)
    )
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
