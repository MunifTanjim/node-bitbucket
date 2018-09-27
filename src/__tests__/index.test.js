const BitBucket = require('../index.js')

describe('bitbucket', () => {
  it('can be instantiated', () => {
    expect(new BitBucket()).toBeInstanceOf(BitBucket)
  })
})
