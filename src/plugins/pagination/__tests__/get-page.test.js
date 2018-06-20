const getPage = require('../get-page')

let apiClient, data

beforeEach(() => {
  apiClient = { request: jest.fn(o => Promise.resolve(o)) }
  data = { next: '/test?page=2' }
})

describe('plugins:pagination/get-page', () => {
  it('throws error if url does not exist', () => {
    expect.assertions(2)

    getPage(apiClient, data, 'prev', e => e && expect(e).toMatchSnapshot())

    expect(getPage(apiClient, data, 'prev')).rejects.toMatchSnapshot()
  })

  it('makes request', async () => {
    expect.assertions(2)

    getPage(apiClient, data, 'next', () => {})
    expect(apiClient.request).toBeCalledTimes(1)
    await getPage(apiClient, data, 'next')
    expect(apiClient.request).toBeCalledTimes(2)
  })

  it('invokes callback if present', () => {
    expect.assertions(1)

    let mockCallback = jest.fn(() => expect(mockCallback).toBeCalled())

    getPage(apiClient, data, 'next', mockCallback)
  })

  it('returns promise if callback not present', () => {
    expect.assertions(1)

    expect(getPage(apiClient, data, 'next')).toBeInstanceOf(Promise)
  })
})
