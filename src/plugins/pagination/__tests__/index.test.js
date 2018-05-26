const PaginationPlugin = require('../')

let apiClient

beforeEach(() => {
  apiClient = {}
})

describe('plugins:pagination', () => {
  it('can be instantiated', () => {
    expect(new PaginationPlugin(apiClient)).toBeInstanceOf(PaginationPlugin)
  })

  it('can be injected into core', () => {
    new PaginationPlugin(apiClient).inject()
    expect(apiClient.getPage).toBeDefined()
    expect(apiClient.nextPage).toBeDefined()
    expect(apiClient.previousPage).toBeDefined()
  })
})
