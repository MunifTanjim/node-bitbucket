const { camelCase, upperFirst } = require('lodash')

const pascalCase = string => upperFirst(camelCase(string))

module.exports.pascalCase = pascalCase
