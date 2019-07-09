function noticePlugin(_client, clientOptions) {
  const { notice = true } = clientOptions

  if (!notice) return

  console.log(
    `\x1b[43m\x1b[30m %s \x1b[0m\x1b[33m %s \x1b[0m`,
    `BITBUCKET CLOUD API CHANGING NOTICE:`,
    `https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr`
  )

  console.log(
    '\x1b[46m\x1b[30m %s \x1b[0m\x1b[36m %s \x1b[0m',
    `BITBUCKET CLOUD API MIGRATION GUIDE:`,
    `https://developer.atlassian.com/cloud/bitbucket/bbc-gdpr-api-migration-guide`
  )

  console.log(
    '\x1b[45m\x1b[30m %s \x1b[0m\x1b[35m %s \x1b[0m',
    `BITBUCKET CLOUD API REPO URL CHANGE:`,
    `https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-workspaces`
  )
}

module.exports = noticePlugin
