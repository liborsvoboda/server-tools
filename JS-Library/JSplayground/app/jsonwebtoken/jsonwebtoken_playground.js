// for documentation
// file:///C:/Users/alex.chan/Desktop/jwt-handbook.pdf or
// https://jwt.io/introduction/

import jwt from 'jsonwebtoken'
import jwtDecode from 'jwt-decode'

const JWT_SECRET = 'JWT Rocks!'

export default class jsonwebtoken_playground {
  doStuff () {
    var jwtToken = createToken({
      headers: {},
      body: {
        user: 'user001',
        password: 'password'
      }
    })

    console.log(`Token is created, read as JSON String ${JSON.stringify(jwtToken)}\n`)

    var requestBodyForLogout = makeRequestForLogout(jwtToken)

    console.log(`requestBodyForLogout is created, read as JSON String ${JSON.stringify(requestBodyForLogout)}\n`)

    var isValid = verifyToken(requestBodyForLogout)
  }
}

function makeRequestForLogout (jwtToken) {
  return {
    headers: {
      authorization: `Bearer ${jwtToken.id_token}`
    },
    body: {
      user: jwtDecode(jwtToken.id_token).user
    }
  }
}

function createToken (requestObject) {
  console.log('creating a Token')
  return {
    id_token: jwt.sign(
      {
        user: requestObject.body.user,
        role: 'ADMIN'
      },
      JWT_SECRET,
      {
        expiresIn: 5 * 60
      })// expires in 300 seconds (5 min)
  }
}

// req is http request
function verifyToken (requestObject) {
  try {
    var profile = jwt.verify(extractToken(requestObject), JWT_SECRET)
    console.log(`Valid jwt token, ${profile.user} logout\n`)
  } catch (err) {
    console.log('Invalid jwt token\n', err)
  }
}

function extractToken (req) {
  if (
    req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    console.log(req.headers.authorization)
    // req.headers.authorization is like "Bearer <base64>"
    return req.headers.authorization.split(' ')[1]
  }
  return null
}
