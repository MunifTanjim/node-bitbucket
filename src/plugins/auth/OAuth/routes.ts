import { SpecType } from './types'

const getOAuthRoutes = (info: SpecType): any => ({
  getToken: {
    authorizationCodeGrant: {
      accepts: ['application/x-www-form-urlencoded'],
      grant_type: 'authorization_code',
      method: 'POST',
      params: {
        client_id: {
          in: '_body',
          required: true,
          type: 'string',
        },
        client_secret: {
          in: '_body',
          required: true,
          type: 'string',
        },
        code: {
          required: true,
          type: 'string',
        },
        grant_type: {
          in: '_body',
          required: true,
          type: 'string',
        },
      },
      url: `${info.tokenUrl}`,
    },
    resourceOwnerPasswordCredentialsGrant: {
      accepts: ['application/x-www-form-urlencoded'],
      grant_type: 'password',
      method: 'POST',
      params: {
        client_id: {
          in: '_body',
          required: true,
          type: 'string',
        },
        client_secret: {
          in: '_body',
          required: true,
          type: 'string',
        },
        grant_type: {
          in: '_body',
          required: true,
          type: 'string',
        },
        password: {
          in: '_body',
          required: true,
          type: 'string',
        },
        username: {
          in: '_body',
          required: true,
          type: 'string',
        },
      },
      url: `${info.tokenUrl}`,
    },
    clientCredentialsGrant: {
      accepts: ['application/x-www-form-urlencoded'],
      grant_type: 'client_credentials',
      method: 'POST',
      params: {
        client_id: {
          in: '_body',
          required: true,
          type: 'string',
        },
        client_secret: {
          in: '_body',
          required: true,
          type: 'string',
        },
        grant_type: {
          in: '_body',
          required: true,
          type: 'string',
        },
      },
      url: `${info.tokenUrl}`,
    },
    bitbucketCloudJWTGrant: {
      accepts: ['application/x-www-form-urlencoded'],
      grant_type: 'urn:bitbucket:oauth2:jwt',
      method: 'POST',
      params: {
        grant_type: {
          in: '_body',
          required: true,
          type: 'string',
        },
        jwtToken: {
          in: 'headers.authorization:JWT',
          required: true,
          type: 'string',
        },
      },
      url: `${info.tokenUrl}`,
    },
    refreshToken: {
      accepts: ['application/x-www-form-urlencoded'],
      grant_type: 'refresh_token',
      method: 'POST',
      params: {
        grant_type: {
          in: '_body',
          required: true,
          type: 'string',
        },
        refresh_token: {
          in: '_body',
          required: true,
          type: 'string',
        },
      },
      url: `${info.tokenUrl}`,
    },
  },
})

export default getOAuthRoutes
