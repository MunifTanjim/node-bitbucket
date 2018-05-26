const getPage = require('./get-page')

class PaginationPlugin {
  constructor(apiClient) {
    this.core = apiClient
  }

  inject() {
    this.core.getPage = (url, callback) => getPage(this.core, url, callback)
    this.core.nextPage = ({ next }) => next
    this.core.previousPage = ({ previous }) => previous
  }
}

module.exports = PaginationPlugin
