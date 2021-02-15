type HookSingular<O, R, E> = import('before-after-hook').HookSingular<O, R, E>
type RequestOptions = import('../endpoint/types').RequestOptions
export type EndpointParams = import('../endpoint/types').EndpointParams
type HTTPError = import('../error/types').HTTPError
type Request = import('../request/types').Request
type Response<T> = import('../request/types').Response<T>

export interface BitbucketOptions {
  type?: any
  auth?: any
  authStrategy?: string
  baseUrl?: string
  request?: RequestOptions['request']
  [option: string]: any
}

export type RequestHook = HookSingular<RequestOptions, Response<any>, HTTPError>

export interface APIClient {
  auth?: (...args: unknown[]) => Promise<unknown>
  request: Request
  requestHook: RequestHook
  [key: string]: any
}

export type Plugin = (client: APIClient, options: BitbucketOptions) => void

export interface APIClientFactory {
  new (options?: BitbucketOptions): APIClient
  (options?: BitbucketOptions): APIClient

  plugins(plugins: Plugin[]): APIClientFactory
}
