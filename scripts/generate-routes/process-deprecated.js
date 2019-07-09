const processDeprecated = (endpointObject, { deprecated = false } = {}) => {
  if (deprecated) endpointObject.deprecated = true
}

module.exports.processDeprecated = processDeprecated
