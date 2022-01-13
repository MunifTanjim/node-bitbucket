import {
  fromMethodAndUrl,
  createQueryStringHash,
  encodeSymmetric,
  SymmetricAlgorithm,
} from 'atlassian-jwt'

export function createJwt(
  method: string,
  fullPath: string,
  auth: { appKey: string; appClientKey: string; appSharedSecret: string }
): string {
  const now = Math.floor(Date.now() / 1000)
  const req = fromMethodAndUrl(method, fullPath)

  const tokenData = {
    iss: auth.appKey,
    sub: auth.appClientKey,
    iat: now,
    exp: now + 300,
    qsh: createQueryStringHash(req),
  }

  // Source: https://bitbucket.org/atlassian/atlassian-connect-express/src/master/lib/middleware/authentication.js
  const token = encodeSymmetric(
    tokenData,
    auth.appSharedSecret,
    SymmetricAlgorithm.HS256
  )

  return token
}
