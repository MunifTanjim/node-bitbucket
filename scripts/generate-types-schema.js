const deepsort = require('deep-sort-object')
const deepmerge = require('deepmerge')
const { writeFileSync } = require('fs')
const { chain } = require('lodash')
const { resolve: resolvePath } = require('path')

const { pascalCase } = require('./utils/pascal-case')

const DEFINITIONS_SPEC = require('../specification/definitions.json')
const PATHS_SPEC = require('../specification/paths.json')

const noiseKeys = [
  'description',
  'format',
  'minimum',
  'minItems',
  'pattern',
  'readOnly',
  'uniqueItems'
]

function deleteNoises(object) {
  noiseKeys.forEach(noiseKey => {
    delete object[noiseKey]
  })
}

function deleteNoisesDeep(object) {
  deleteNoises(object)

  if (object.items) {
    deleteNoisesDeep(object.items)
  }

  if (object.properties) {
    Object.values(object.properties).forEach(deleteNoisesDeep)
  }
}

const entityNames = chain(DEFINITIONS_SPEC)
  .keys()
  .uniq()
  .sort()
  .value()

const schema = {
  type: 'object',
  definitions: {},
  properties: {}
}

for (const [entityName, entity] of Object.entries(DEFINITIONS_SPEC)) {
  deleteNoisesDeep(entity)
  entity.allOf && entity.allOf.forEach(deleteNoisesDeep)
  schema.definitions[entityName] = deepmerge({}, entity)
}

const stringifiedPathsSpec = JSON.stringify(PATHS_SPEC)

for (const entityName of entityNames) {
  if (RegExp(`"#/definitions/${entityName}"`).test(stringifiedPathsSpec)) {
    schema.properties[entityName] = {
      $ref: `#/definitions/${entityName}`
    }
  }
}

let stringifiedSchema = JSON.stringify(deepsort(schema), null, 2)

for (const entityName of entityNames) {
  stringifiedSchema = chain(stringifiedSchema)
    .replace(
      RegExp(`^ {0,4}"${entityName}":`, 'gm'),
      `    "${pascalCase(entityName)}":`
    )
    .replace(
      RegExp(`"#/definitions/${entityName}"`, 'g'),
      `"#/definitions/${pascalCase(entityName)}"`
    )
    .value()
}

const typesSchemaPath = resolvePath('templates/types-schema.json')

writeFileSync(typesSchemaPath, `${stringifiedSchema}\n`)
