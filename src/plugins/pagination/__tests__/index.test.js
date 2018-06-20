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
    expect(apiClient.hasNextPage).toBeDefined()
    expect(apiClient.getNextPage).toBeDefined()
    expect(apiClient.hasPreviousPage).toBeDefined()
    expect(apiClient.getPreviousPage).toBeDefined()
  })
})
