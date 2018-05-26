const authenticate = require('../authenticate')

const state = {}

beforeEach(() => {
  state.auth = false
})

describe('plugins:authentication/authenticate', () => {
  it('throws Error if `type` is invalid', () => {
    expect(() => authenticate(state, { type: 'error' })).toThrow()
  })

  it('sets auth to `false` if `type` is Falsy', () => {
    authenticate(state, {})
    expect(state.auth).toBe(false)
  })

  describe.each([['basic'], ['apppassword']])('authentication `type`', type => {
    it('throws Error if `username` or `password` is Falsy', () => {
      expect(() => authenticate(state, { type })).toThrow()
      expect(() =>
        authenticate(state, { type, username: 'username' })
      ).toThrow()
      expect(() =>
        authenticate(state, { type, password: 'password' })
      ).toThrow()
      expect(() =>
        authenticate(state, { type, username: '', password: '' })
      ).toThrow()
    })

    it('updates `auth` if `username` and `password` is valid', () => {
      let option = { type, username: 'username', password: 'password' }
      authenticate(state, option)
      expect(state.auth).toEqual(option)
    })
  })

  describe.each([['token']])('authentication `type`', type => {
    it('throws Error if `token` is Falsy', () => {
      expect(() => authenticate(state, { type })).toThrow()
      expect(() => authenticate(state, { type, token: '' })).toThrow()
    })

    it('updates `auth` if `token` is valid', () => {
      let option = { type, token: 'token' }
      authenticate(state, option)
      expect(state.auth).toEqual(option)
    })
  })
})
