const URL_CORRECTION = {
  '/users/{username}/ssh-keys/': '/users/{username}/ssh-keys/{key_id}'
}

const setUrl = (endpointObject, url) => {
  endpointObject.url = URL_CORRECTION[url] || url
}

module.exports.setUrl = setUrl
