const { Bitbucket } = require('./index.umd')

const res = new Bitbucket({
  authStrategy: 'OAuth',
  auth: {
    grant_type: 'clientCredentialsGrant',
    client_id: 'client',
    client_secret: 'sdgfadfgsdfg',
  },
})

res.auth().then((res) => {
  console.log(res)
})
