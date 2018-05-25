const addQueryParameters = require('../add-query-parameters')

const url = '/'

describe('utils:add-query-parameters', () => {
  it('returns url as is when params is empty', () => {
    expect(addQueryParameters(url)).toBe(url)
    expect(addQueryParameters(url, {})).toBe(url)
  })

  it('works on fresh url', () => {
    expect(addQueryParameters(url, { wibbly: 'wobbly' })).toMatchSnapshot()
  })

  it('works on url containing query string', () => {
    let urlWithQS = addQueryParameters(url, { wibbly: 'wobbly' })
    expect(addQueryParameters(urlWithQS, { timey: 'wimey' })).toMatchSnapshot()
  })

  it('encodes uri components', () => {
    expect(addQueryParameters(url, { query: '&+' })).not.toMatch(/&|\+/)
  })

  it('does not encode `+` when query name is `q`', () => {
    expect(addQueryParameters(url, { q: 'doctor+who?' })).toMatch(/\+/)
  })
})
