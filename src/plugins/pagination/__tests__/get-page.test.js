const getPage = require('../get-page')
const HTTPError = require('../../../request/http-error')

let apiClient, url

beforeEach(() => {
  apiClient = {
    request: jest.fn(o => Promise.resolve(o))
  }
  url = '/test'
})

describe('plugins:pagination/get-page', () => {
  it('invokes callback if present', () => {
    expect.assertions(1)

    let mockCallback = jest.fn(() => expect(mockCallback).toBeCalled())

    getPage(apiClient, url, mockCallback)
  })

  it('returns promise if callback not present', async () => {
    expect.assertions(1)

    await expect(getPage(apiClient, url)).resolves.toMatchSnapshot()
  })

  it('returns HTTPError if url is Falsy', async () => {
    expect.assertions(2)

    url = ''

    getPage(apiClient, url, e => e && expect(e).toBeInstanceOf(HTTPError))
    await expect(getPage(apiClient, url)).rejects.toBeInstanceOf(HTTPError)
  })

  it('makes request', async () => {
    expect.assertions(2)

    getPage(apiClient, url, () => {})
    expect(apiClient.request).toBeCalledTimes(1)
    await getPage(apiClient, url)
    expect(apiClient.request).toBeCalledTimes(2)
  })
})
