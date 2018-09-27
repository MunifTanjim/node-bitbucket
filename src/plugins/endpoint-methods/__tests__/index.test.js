const EndpointMethodsPlugin = require('../index.js')

let apiClient

beforeEach(() => {
  apiClient = {}
})

describe('plugins:endpoint-methods', () => {
  it('can be instantiated', () => {
    expect(new EndpointMethodsPlugin(apiClient)).toBeInstanceOf(
      EndpointMethodsPlugin
    )
  })
})
