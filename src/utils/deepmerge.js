/**
 * Modified deepmerge
 * Original library: https://www.npmjs.com/package/deepmerge
 */

const isPlainObject = require('is-plain-object')

const isMergeableObject = value => isPlainObject(value) || Array.isArray(value)

const emptyTarget = value => (Array.isArray(value) ? [] : {})

const cloneUnlessOtherwiseSpecified = value =>
  isMergeableObject(value) ? deepmerge(emptyTarget(value), value) : value

const mergeArray = (target, source) =>
  target.concat(source).map(element => cloneUnlessOtherwiseSpecified(element))

const mergeObject = (target, source) => {
  let destination = {}

  if (isMergeableObject(target)) {
    Object.keys(target).forEach(key => {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key])
    })
  }

  Object.keys(source).forEach(key => {
    if (!isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key])
    } else {
      destination[key] = deepmerge(target[key], source[key])
    }
  })

  return destination
}

const deepmerge = (target, source) => {
  let sourceIsArray = Array.isArray(source)
  let targetIsArray = Array.isArray(target)
  let sourceAndTargetTypesMatch = sourceIsArray === targetIsArray

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source)
  } else if (sourceIsArray) {
    return mergeArray(target, source)
  } else {
    return mergeObject(target, source)
  }
}

module.exports = deepmerge
