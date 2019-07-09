const { set } = require('lodash')

const processProduces = (endpointObject, { produces = [] } = {}) => {
  if (produces.length === 1) {
    set(endpointObject, 'headers.accept', produces[0])
  }
}

module.exports.processProduces = processProduces
