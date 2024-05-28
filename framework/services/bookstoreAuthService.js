import config from '../config/bookstoreConfig'

const generateToken = async ({ userName, password }) => {
  const response = await fetch(`${config.baseURL}/Account/v1/GenerateToken`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userName,
      password,
    }),
  })
  return {
    status: response.status,
    headers: response.headers,
    data: await response.json(),
  }
}

const authorized = async ({ userName, password }) => {
  const response = await fetch(`${config.baseURL}/Account/v1/Authorized`, {
    method: 'POST',
    body: JSON.stringify({
      userName,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im90dXMtcWFqcy16b3JpbiIsInBhc3N3b3JkIjoiUGFzc3dvcmQxMjMhIiwiaWF0IjoxNzE2NDUyMTAxfQ.gOA8jNiwSYCb4NPOCT6en15EYiVt6Z37CsoYa1BHnNU`,
    },
  })
  return {
    status: response.status,
    headers: response.headers,
    data: await response.json(),
  }
}

export default {
  generateToken,
  authorized,
}
