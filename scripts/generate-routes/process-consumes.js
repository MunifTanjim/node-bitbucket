const { uniq } = require('lodash')

const processConsumes = (endpointObject, { consumes = [] } = {}) => {
  if (!endpointObject.accepts) endpointObject.accepts = []

  endpointObject.accepts = uniq(endpointObject.accepts.concat(consumes))
}

module.exports.processConsumes = processConsumes
