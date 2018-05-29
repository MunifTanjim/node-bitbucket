/**
 * Returns Grouped Parameter Names
 * @param {Object} paramsSpecs
 * @returns {Object} Grouped Parameter Names
 */
const getParamGroups = (paramsSpecs = {}) => {
  let paramGroups = { body: [], path: [], query: [] }

  Object.keys(paramsSpecs).forEach(paramName => {
    let groupName = paramsSpecs[paramName].in || 'body'
    paramGroups[groupName].push(paramName)
  })

  return paramGroups
}

module.exports = getParamGroups
