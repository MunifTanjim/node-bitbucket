const HTTPError = require('../../../request/http-error')
const validate = require('../validate')

const paramsSpecs = {
  boolean: { type: 'boolean' },
  enum: { enum: ['validEnum'], type: 'string' },
  integer: { type: 'integer' },
  required: { required: true, type: 'string' },
  string: { type: 'string' }
}

let validParams = {
  boolean: true,
  enum: 'validEnum',
  integer: 42,
  required: 'required',
  string: 'string',
  xtra: 'xtra'
}

let params

beforeEach(() => {
  params = { ...validParams }
})

describe('plugins:endpoint-methods/validate', () => {
  it('returns valid params as is', () => {
    expect(validate(paramsSpecs, params)).toEqual(validParams)
  })

  it('returns passed params as is when non-required params missing', () => {
    delete params.boolean
    delete params.enum
    delete params.integer
    delete params.string

    expect(validate(paramsSpecs, params)).toEqual(params)
  })

  it('throws HTTPError when required params missing', () => {
    delete params.required

    expect(() => validate(paramsSpecs, params)).toThrow(HTTPError)
  })

  it('parses string value to int when type is integer', () => {
    params.integer = '42'

    expect(() => validate(paramsSpecs, params)).not.toThrow()
  })

  it.each([['false'], ['true']])(
    'accepts as boolean type when value is string',
    value => {
      params.boolean = value

      expect(() => validate(paramsSpecs, params)).not.toThrow()
    }
  )

  it.each([['integer', 'forty-two'], ['boolean', 'yes']])(
    'throws HTTPError when invalid params passed: (type value)',
    (paramName, paramValue) => {
      params[paramName] = paramValue

      expect(() => validate(paramsSpecs, params)).toThrow(HTTPError)
    }
  )

  it('throws HTTPError when param value not in enum', () => {
    params.enum = 'invalidEnum'

    expect(() => validate(paramsSpecs, params)).toThrow(HTTPError)
  })
})
