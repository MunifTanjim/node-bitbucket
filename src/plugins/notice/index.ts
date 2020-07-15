/* eslint-disable no-console */

type APIClient = import('./types').APIClient
type Options = import('./types').Options

function noticePlugin(_client: APIClient, clientOptions: Options): void {
  const { notice = true } = clientOptions

  if (!notice) return

  console.log(
    '\x1b[46m\x1b[30m %s \x1b[0m\x1b[36m %s \x1b[0m',
    `BITBUCKET CLOUD API LATEST UPDATES:`,
    `https://developer.atlassian.com/cloud/bitbucket`
  )
}

export default noticePlugin
