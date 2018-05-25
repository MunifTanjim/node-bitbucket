const endpointMethod = require('../method')

jest.mock('../validate', () => jest.fn((paramsSpecs, params) => params))

const validate = require('../validate')

let apiClient

beforeEach(() => {
  apiClient = {
    request: jest.fn(o => Promise.resolve(o))
  }
})

describe('plugins:endpoint-methods/method', () => {
  it('invokes callback if present', () => {
    expect.assertions(1)

    let mockCallback = jest.fn(() => expect(mockCallback).toBeCalled())

    endpointMethod(apiClient, {}, {}, {}, mockCallback)
  })

  it('returns resolved promise if callback not present', async () => {
    expect.assertions(1)

    await expect(
      endpointMethod(apiClient, {}, {}, {})
    ).resolves.toMatchSnapshot()
  })

  it('calls `validate` & `apiClient.request`', async () => {
    expect.assertions(2)

    await endpointMethod(apiClient, {}, {}, {})

    expect(validate).toBeCalled()
    expect(apiClient.request).toBeCalled()
  })
})
