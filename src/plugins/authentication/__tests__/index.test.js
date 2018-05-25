const Hook = require('before-after-hook')
const AuthenticationPlugin = require('../')

let apiClient

beforeEach(() => {
  apiClient = {
    hook: new Hook()
  }
})

describe('plugins:authentication', () => {
  it('can be instantiated', () => {
    expect(new AuthenticationPlugin(apiClient)).toBeInstanceOf(
      AuthenticationPlugin
    )
  })

  it('can be injected into core', () => {
    new AuthenticationPlugin(apiClient).inject()
    expect(apiClient.authenticate).toBeDefined()
  })
})
