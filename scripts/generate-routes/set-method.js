const setMethod = (endpointObject, method) => {
  endpointObject.method = method.toUpperCase()
}

module.exports.setMethod = setMethod
