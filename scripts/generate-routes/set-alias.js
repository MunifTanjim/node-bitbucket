const setAlias = (
  endpointObject,
  namespaceName,
  resourceNamespaceName,
  endpointNameByNamespaces
) => {
  const isAlias = namespaceName !== resourceNamespaceName
  const originalEndpointName = endpointNameByNamespaces[resourceNamespaceName]

  if (isAlias && originalEndpointName) {
    endpointObject.alias = `${resourceNamespaceName}.${originalEndpointName}`
  }

  return isAlias
}

module.exports.setAlias = setAlias
