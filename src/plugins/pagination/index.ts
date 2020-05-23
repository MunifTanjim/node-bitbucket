import { getPage } from './get-page'

type APIClient = import('./types').APIClient
type PaginatedResponseData<T> = import('./types').PaginatedResponseData<T>

function paginationPlugin(client: APIClient): void {
  client.hasNextPage = <T>({ next }: PaginatedResponseData<T>): boolean =>
    Boolean(next)
  client.getNextPage = getPage.bind(null, client, 'next')

  client.hasPreviousPage = <T>({
    previous,
  }: PaginatedResponseData<T>): boolean => Boolean(previous)
  client.getPreviousPage = getPage.bind(null, client, 'previous')
}

export default paginationPlugin
