function validateOptions(auth) {
  if (auth.username && auth.password) return

  if (auth.token) return

  throw new Error(`Invalid "auth" option: ${JSON.stringify(auth)}`)
}

module.exports = validateOptions
