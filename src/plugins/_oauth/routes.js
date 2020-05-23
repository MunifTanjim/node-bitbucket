const getOAuthRoutes = (info) => ({
  getToken: {
    authorizationCodeGrant: {
      grant_type: 'authorization_code',
      method: 'POST',
      params: {
        client_id: {
          in: 'body',
          required: true,
          type: 'string',
        },
        client_secret: {
          in: 'body',
          required: true,
          type: 'string',
        },
        code: {
          required: true,
          type: 'string',
        },
        grant_type: {
          in: 'body',
          required: true,
          type: 'string',
        },
      },
      url: `${info.tokenUrl}`,
    },
    implicitGrant: {
      response_type: 'token',
      method: 'GET',
      params: {
        client_id: {
          in: 'query',
          required: true,
          type: 'string',
        },
        response_type: {
          in: 'query',
          required: true,
          type: 'string',
        },
      },
      url: `${info.tokenUrl}`,
    },
    resourceOwnerPasswordCredentialsGrant: {
      grant_type: 'password',
      method: 'POST',
      params: {
        client_id: {
          in: 'body',
          required: true,
          type: 'string',
        },
        client_secret: {
          in: 'body',
          required: true,
          type: 'string',
        },
        grant_type: {
          in: 'body',
          required: true,
          type: 'string',
        },
        password: {
          in: 'body',
          required: true,
          type: 'string',
        },
        username: {
          in: 'body',
          required: true,
          type: 'string',
        },
      },
      url: `${info.tokenUrl}`,
    },
    clientCredentialsGrant: {
      grant_type: 'client_credentials',
      method: 'POST',
      params: {
        client_id: {
          in: 'body',
          required: true,
          type: 'string',
        },
        client_secret: {
          in: 'body',
          required: true,
          type: 'string',
        },
        grant_type: {
          in: 'body',
          required: true,
          type: 'string',
        },
      },
      url: `${info.tokenUrl}`,
    },
    bitbucketCloudJWTGrant: {
      grant_type: 'urn:bitbucket:oauth2:jwt',
      method: 'POST',
      params: {
        grant_type: {
          in: 'body',
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
  },
})

module.exports = getOAuthRoutes
