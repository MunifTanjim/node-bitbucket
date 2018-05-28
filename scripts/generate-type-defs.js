const _ = require('lodash')
const path = require('path')
const { writeFileSync } = require('fs')
const deepmerge = require('deepmerge')
const deepsort = require('deep-sort-object')

const { pascalCase } = require('./helpers')

const DEFINITIONS_SPEC = require('../specification/definitions.json')
const PATHS_SPEC = require('../specification/paths.json')

const responseTypeDefsPath = path.resolve('scripts/type-defs.json')

let noiseKeys = [
  'description',
  'format',
  'minimum',
  'minItems',
  'pattern',
  'readOnly',
  'uniqueItems'
]

const deleteNoises = object => {
  _.each(noiseKeys, noise => delete object[noise])
}

const recursivelyDeleteNoises = object => {
  deleteNoises(object)
  object.items && recursivelyDeleteNoises(object.items)
  object.properties && _.each(object.properties, recursivelyDeleteNoises)
}

const entityNames = _.chain(DEFINITIONS_SPEC)
  .keys()
  .uniq()
  .sort()
  .value()

const rootObject = {
  type: 'object',
  definitions: {},
  properties: {}
}

_.each(DEFINITIONS_SPEC, (entity, entityName) => {
  recursivelyDeleteNoises(entity)
  entity.allOf && _.each(entity.allOf, recursivelyDeleteNoises)
  rootObject.definitions[entityName] = deepmerge({}, entity)
})

let stringifiedPathsSpec = JSON.stringify(PATHS_SPEC)

_.each(entityNames, entityName => {
  if (RegExp(`"#/definitions/${entityName}"`).test(stringifiedPathsSpec)) {
    rootObject.properties[entityName] = {
      $ref: `#/definitions/${entityName}`
    }
  }
})

let stringifiedResponseTypeDefs = JSON.stringify(deepsort(rootObject), null, 2)

_.each(entityNames, entityName => {
  stringifiedResponseTypeDefs = _.chain(stringifiedResponseTypeDefs)
    .replace(
      RegExp(`^ {0,4}"${entityName}":`, 'gm'),
      `    "${pascalCase(entityName)}":`
    )
    .replace(
      RegExp(`"#/definitions/${entityName}"`, 'g'),
      `"#/definitions/${pascalCase(entityName)}"`
    )
    .value()
})

writeFileSync(responseTypeDefsPath, `${stringifiedResponseTypeDefs}\n`)
