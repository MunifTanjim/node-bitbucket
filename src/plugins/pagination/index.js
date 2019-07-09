const getPage = require('./get-page.js')

function paginationPlugin(client) {
  client.hasNextPage = ({ next }) => Boolean(next)
  client.getNextPage = getPage.bind(null, client, 'next')

  client.hasPreviousPage = ({ previous }) => Boolean(previous)
  client.getPreviousPage = getPage.bind(null, client, 'previous')
}

module.exports = paginationPlugin
