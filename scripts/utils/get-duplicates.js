const { chain, includes } = require('lodash')

const getDuplicates = array => {
  return chain(array)
    .filter((value, index, iteratee) => includes(iteratee, value, index + 1))
    .uniq()
    .value()
}

module.exports.getDuplicates = getDuplicates
