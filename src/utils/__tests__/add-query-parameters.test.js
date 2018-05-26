const addQueryParameters = require('../add-query-parameters')

const url = '/'

const reservedChars = ';,/?:@&=+$#'
const unreservedChards = "-_.!~*'()"
const alphanumericAndSpace = 'ABC abc 123'

describe('utils:add-query-parameters', () => {
  it('returns url as is when params is empty', () => {
    expect(addQueryParameters(url)).toBe(url)
    expect(addQueryParameters(url, {})).toBe(url)
  })

  it('works on fresh url', () => {
    expect(addQueryParameters(url, { wibbly: 'wobbly' })).toMatchSnapshot()
  })

  it('works on url containing query string', () => {
    let qs = addQueryParameters(url, { wibbly: 'wobbly' })
    expect(addQueryParameters(qs, { timey: 'wimey' })).toMatchSnapshot()
  })

  it('encodes URI Components', () => {
    expect(addQueryParameters(url, { query: reservedChars })).toMatch(
      encodeURIComponent(reservedChars)
    )
    expect(addQueryParameters(url, { query: unreservedChards })).toMatch(
      encodeURIComponent(unreservedChards)
    )
    expect(addQueryParameters(url, { query: alphanumericAndSpace })).toMatch(
      encodeURIComponent(alphanumericAndSpace)
    )
  })

  it('replaces space with `+` for filtering query: `q`', () => {
    let qs = addQueryParameters(url, { q: 'do != "blink"' })

    expect(qs).toMatch('+')
    expect(qs).not.toMatch(encodeURIComponent(' '))
    expect(qs).toMatchSnapshot()
  })

  it('accepts array for filtering query: `q`', () => {
    let qs = addQueryParameters(url, {
      q: ['name = "doctor"', 'and', 'is = "who"']
    })
    expect(qs).toMatchSnapshot()
  })
})
