/**
 * Returns Grouped Parameter Names
 * @param {Object} paramsSpecs
 * @returns {Object} Grouped Parameter Names
 */
const getParamGroups = paramsSpecs => {
  let paramGroups = {}

  Object.keys(paramsSpecs).forEach(paramName => {
    let groupName = paramsSpecs[paramName].in

    if (!Array.isArray(paramGroups[groupName])) {
      paramGroups[groupName] = []
    }

    paramGroups[groupName].push(paramName)
  })

  return paramGroups
}

module.exports = getParamGroups
