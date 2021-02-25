const URL_CORRECTION = {}

const setUrl = (endpointObject, url) => {
  endpointObject.url = URL_CORRECTION[url] || url
}

module.exports.setUrl = setUrl
