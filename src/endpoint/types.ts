import { Agent } from 'http'

export type Headers = { [header: string]: string }

export type RequestMethod = 'DELETE' | 'GET' | 'POST' | 'PUT'

export type EndpointParams = {
  baseUrl?: string
  headers?: Headers
  request?: { [option: string]: any }
  [param: string]: any
}

export type EndpointDefaults = EndpointParams & {
  method: RequestMethod
  baseUrl: string
  headers: Headers & {
    accept: string
    'user-agent': string
  }
}

export type EndpointOptions = EndpointParams & {
  method: RequestMethod
  url: string
}

export type RequestOptions = {
  method: RequestMethod
  url: string
  body?: any
  headers: Headers & {
    accept?: string
    authorization?: string
    'user-agent'?: string
  }
  request?: {
    agent?: Agent
    fetch?: Function
    timeout?: number
  }
}

export interface Endpoint {
  (endpointRoute: string, endpointOptions?: EndpointParams): RequestOptions
  (endpointOptions: EndpointOptions): RequestOptions
  DEFAULTS: EndpointDefaults
  defaults(endpointOptions: EndpointParams): Endpoint
  merge(
    endpointRoute: string,
    endpointOptions?: EndpointParams
  ): EndpointDefaults
  merge(endpointOptions: EndpointParams): EndpointDefaults
  parse(endpointOptions: EndpointDefaults): RequestOptions
}
