import {
  Endpoint,
  EndpointDefaults,
  EndpointOptions,
  EndpointParams,
  Headers
} from '../endpoint/types'

export type Endpoint = Endpoint
export type EndpointDefaults = EndpointDefaults
export type EndpointOptions = EndpointOptions
export type EndpointParams = EndpointParams
export type Headers = Headers

export interface Response<T> {
  data: T
  headers: Headers & {
    date: string
    etag: string
    'x-accepted-oauth-scopes': string
  }
  status: number
  url: string
}

export type PaginatedResponseData<T> = Response<T>['data'] & {
  next?: string
  previous?: string
}

export interface Request {
  (endpointRoute: string, endpointOptions?: EndpointParams): Promise<
    Response<any>
  >
  (endpointOptions: EndpointOptions): Promise<Response<any>>
  defaults(endpointOptions: EndpointParams): Request
  endpoint: Endpoint
}
