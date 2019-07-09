const HTTPError = require('../../error')

const getPage = (client, direction, responseData) => {
  const url = responseData[direction]

  if (!url) {
    throw new HTTPError(`not found: ${direction} page`, 404)
  }

  return client.request({ url })
}

module.exports = getPage
