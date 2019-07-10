import { RequestOptions } from '../endpoint/types'
import { HTTPError } from '../error'
import { Request, Response } from '../request/types'

export type AuthBasic = {
  username: string
  password: string
}

export type AuthToken = {
  token: string
}

export type AuthOptions = AuthToken | AuthBasic

export interface Options {
  auth?: AuthOptions
  baseUrl?: string
  notice?: boolean
  request?: {
    [option: string]: any
  }
  [option: string]: any
}

export interface RequestHook {
  before(callback: (options: RequestOptions) => void): void
  after(
    callback: (response: Response<any>, options: RequestOptions) => void
  ): void
  error(callback: (error: HTTPError, options: RequestOptions) => void): void
  wrap(
    callback: (
      request: (options: RequestOptions) => Promise<Response<any>>,
      options: RequestOptions
    ) => void
  ): void
}

export interface APIClient {
  request: Request
  requestHook: RequestHook
  [key: string]: any
}

export type Plugin = (client: APIClient, options: Options) => void

export interface APIClientFactory {
  new (options?: Options): APIClient
  (options?: Options): APIClient

  plugins(plugins: Plugin[]): APIClientFactory
}

declare const Bitbucket: APIClientFactory

export default Bitbucket
