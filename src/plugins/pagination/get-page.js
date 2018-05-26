const HTTPError = require('../../request/http-error')

const getPage = (apiClient, url, callback) => {
  if (!url) {
    let urlError = new HTTPError(`No URL found`, 404)
    return callback ? callback(urlError) : Promise.reject(urlError)
  }

  let requestOptions = { url }

  let promise = apiClient.request(requestOptions)

  if (callback) {
    promise
      .then(response => {
        callback(null, response)
      })
      .catch(callback)
    return
  }

  return promise
}

module.exports = getPage
