const getParamGroups = require('../get-param-groups')

expect.addSnapshotSerializer({
  test: o =>
    typeof o === 'object' &&
    !Object.keys(o)
      .map(key => Array.isArray(o[key]))
      .includes(false),
  print: o =>
    `{\n${Object.keys(o)
      .map(group => `  ${group}: ['${o[group].join("','")}']`)
      .join(',\n')}\n}`
})

const paramsSpecs = {
  body1: { in: 'body' },
  path1: { in: 'path' },
  query1: { in: 'query' },
  query2: { in: 'query' }
}

describe('plugins:endpoint-methods/get-param-groups', () => {
  it('returns grouped params', () => {
    expect(getParamGroups(paramsSpecs)).toMatchSnapshot()
  })
})
