import { HookSingular } from 'before-after-hook'

import { RequestOptions } from '../endpoint/types'
import { HTTPError } from '../error'
import { Request, Response } from '../request/types'

export { EndpointParams } from '../endpoint/types'

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
  request?: RequestOptions['request']
  [option: string]: any
}

export type RequestHook = HookSingular<RequestOptions, Response<any>, HTTPError>

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
