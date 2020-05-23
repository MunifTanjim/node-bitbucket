const tasks = (taskList) => taskList.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks(['lint-staged', 'pretty-quick --staged']),
  },
}
