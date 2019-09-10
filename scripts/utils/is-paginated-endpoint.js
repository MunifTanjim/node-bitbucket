const isPaginatedEndpoint = (endpointName, endpointObject) => {
  const isPaginatedList = /^list/i.test(endpointName)
  const returnsPaginated =
    endpointObject.returns && /^paginated/i.test(endpointObject.returns)

  return isPaginatedList || returnsPaginated
}

module.exports.isPaginatedEndpoint = isPaginatedEndpoint
