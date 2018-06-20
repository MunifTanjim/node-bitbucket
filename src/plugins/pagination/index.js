const getPage = require('./get-page')

class PaginationPlugin {
  constructor(apiClient) {
    this.core = apiClient
  }

  inject() {
    this.core.hasNextPage = ({ next }) => Boolean(next)
    this.core.getNextPage = (data, callback) =>
      getPage(this.core, data, 'next', callback)

    this.core.hasPreviousPage = ({ previous }) => Boolean(previous)
    this.core.getPreviousPage = (data, callback) =>
      getPage(this.core, data, 'previous', callback)
  }
}

module.exports = PaginationPlugin
