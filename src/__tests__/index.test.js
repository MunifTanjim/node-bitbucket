const Bitbucket = require('../index.js')

describe('bitbucket', () => {
  it('can be instantiated', () => {
    expect(new Bitbucket()).toBeInstanceOf(Bitbucket)
  })
})
