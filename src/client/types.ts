import { HookSingular } from 'before-after-hook'
import { RequestOptions } from '../endpoint/types'
import { HTTPError } from '../error'
import { Request, Response } from '../request/types'

export { EndpointParams } from '../endpoint/types'

export interface Options {
  [option: string]: any
  baseUrl?: string
  request?: RequestOptions['request']
}

export type RequestHook = HookSingular<RequestOptions, Response<any>, HTTPError>

export interface APIClient {
  [key: string]: any
  request: Request
  requestHook: RequestHook
}

export type Plugin = (client: APIClient, options: Options) => void

export interface APIClientFactory {
  new (options?: Options): APIClient
  (options?: Options): APIClient

  plugins(plugins: Plugin[]): APIClientFactory
}
