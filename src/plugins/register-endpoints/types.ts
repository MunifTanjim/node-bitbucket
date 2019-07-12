export { APIClient, Options } from '../../client/types'
export { EndpointDefaults, RequestOptions } from '../../endpoint/types'

export type Headers = import('../../endpoint/types').Headers
export type RequestMethod = import('../../endpoint/types').RequestMethod

export type Routes = {
  [namespace: string]: {
    [endpoint: string]: {
      accepts?: string[]
      alias?: string
      deprecated?: boolean
      headers?: Headers
      method?: RequestMethod
      params?: {
        [param: string]: {
          enum?: string[]
          required?: boolean
          schema?: string
          type: string
        }
      }
      returns?: string
      url?: string
    }
  }
}
