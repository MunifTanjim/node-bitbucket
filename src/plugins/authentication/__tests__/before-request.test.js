const deepmerge = require('deepmerge')
const authenticate = require('../authenticate')
const beforeRequest = require('../before-request')

const state = {}

const initialEndpointOptions = {
  headers: {},
  url: '/test'
}

let endpointOptions

beforeEach(() => {
  state.auth = false
  endpointOptions = deepmerge({}, initialEndpointOptions)
})

describe('plugins:authentication/before-request', () => {
  it('does nothing if not authenticated', () => {
    beforeRequest(state, endpointOptions)
    expect(endpointOptions).toEqual(initialEndpointOptions)
  })

  describe.each([['basic'], ['app_password']])(
    'authentication `type`',
    type => {
      it('sets headers `authorization:Basic`', () => {
        let options = { type, username: 'username', password: 'password' }
        authenticate(state, options)
        beforeRequest(state, endpointOptions)
        expect(endpointOptions.headers.authorization).toMatchSnapshot()
      })
    }
  )

  describe.each([['token']])('authentication `type`', type => {
    it('sets headers `authorization:Bearer`', () => {
      let token = 'token'
      authenticate(state, { type, token })
      beforeRequest(state, endpointOptions)
      expect(endpointOptions.headers.authorization).toBe(`Bearer ${token}`)
    })
  })
})
