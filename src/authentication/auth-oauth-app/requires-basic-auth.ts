/**
 * The following endpoints require an OAuth App to authenticate using its client_id and client_secret.
 *
 * - [`POST /applications/{client_id}/token`](https://developer.github.com/v3/apps/oauth_applications/#check-a-token) - Check a token
 * - [`PATCH /applications/{client_id}/token`](https://developer.github.com/v3/apps/oauth_applications/#reset-a-token) - Reset a token
 * - [`DELETE /applications/{client_id}/token`](https://developer.github.com/v3/apps/oauth_applications/#reset-a-token) - Delete an app token
 * - [`DELETE /applications/{client_id}/grant`](https://developer.github.com/v3/apps/oauth_applications/#delete-an-app-authorization) - Delete an app authorization
 *
 * deprecated:
 *
 * - [`GET /applications/{client_id}/tokens/{access_token}`](https://developer.github.com/v3/apps/oauth_applications/#check-an-authorization) - Check an authorization
 * - [`POST /applications/{client_id}/tokens/{access_token}`](https://developer.github.com/v3/apps/oauth_applications/#reset-an-authorization) - Reset an authorization
 * - [`DELETE /applications/{client_id}/tokens/{access_token}`](https://developer.github.com/v3/apps/oauth_applications/#revoke-an-authorization-for-an-application) - Revoke an authorization for an application
 * - [`DELETE /applications/{client_id}/grants/{access_token}`](https://developer.github.com/v3/apps/oauth_applications/#revoke-a-grant-for-an-application) - Revoke a grant for an application
 */
const ROUTES_REQUIRING_BASIC_AUTH = /\/applications\/[:{]?[\w_]+\}?\/(token|grant)(s\/[:{]?[\w_]+\}?)?($|\?)/

type URL = string | undefined

export function requiresBasicAuth(url: URL): URL | boolean {
  return url && ROUTES_REQUIRING_BASIC_AUTH.test(url)
}
